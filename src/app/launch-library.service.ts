import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { UpcomingPreviousAll } from "./types/upcoming-previous-all";
import { PreviousLaunchService } from "./masterdata/previous-launches.service";
import { PreviousEventService } from "./masterdata/previous-events.service";

@Injectable({
  providedIn: "root",
})
export class LaunchLibraryService {
  baseUrl: string = environment.launchLibrary;
  eventsById: { id: string; object: any }[] = [];
  launchesById: { id: string; object: any }[] = [];
  constructor(
    private http: HttpClient,
    private previousLaunchesService: PreviousLaunchService,
    private previousEventsService: PreviousEventService
  ) {}

  /*
   * Dashboard
   */
  async getStarshipDashboard() {
    const url = this.baseUrl + "/dashboard/starship";
    const data = await this.http.get<any>(url).toPromise();
    return data;
  }
  /*
   * Event
   */
  async getEventById(id: string, bypassCache?: boolean) {
    const previousEvent = this.previousEventsService.getPreviousEventById(
      id
    );
    if (previousEvent) {
      return previousEvent;
    }
    const object = this.getIdFromCache(this.eventsById, id);
    if (object !== undefined && !bypassCache) {
      return object;
    }
    const url = this.baseUrl + "/event/" + id;
    const data = await this.http.get<any>(url).toPromise();
    this.eventsById.push({ id, object: data });
    return data;
  }
  async getFirstEvents(
    search?: string,
    type?: number,
    upcomingPreviousAll?: UpcomingPreviousAll
  ) {
    return this.getNextEvents(0, search, type, upcomingPreviousAll);
  }
  async getNextEvents(
    offset: number,
    search?: string,
    type?: number,
    upcomingPreviousAll?: UpcomingPreviousAll
  ) {
    const url = this.createEventUrl(
      25,
      offset,
      search,
      type,
      upcomingPreviousAll
    );
    const data = await this.http.get<any>(url).toPromise();
    return { events: data.results, max: data.count };
  }
  private createEventUrl(
    limit: number,
    offset?: number,
    search?: string,
    type?: number,
    upcomingPreviousAll?: UpcomingPreviousAll
  ): string {
    let url = this.baseUrl + "/event/";
    switch (upcomingPreviousAll) {
      case UpcomingPreviousAll.PREVIOUS:
        url += "previous/";
        break;
      case UpcomingPreviousAll.UPCOMING:
        url += "upcoming/";
        break;
      default:
        break;
    }
    url += "?limit=" + limit;
    if (search !== undefined && search !== "") {
      url += "&search=" + search;
    }
    if (type !== undefined && type !== 0) {
      url += "&type=" + type;
    }
    if (offset !== undefined) {
      url += "&offset=" + offset;
    }
    url += "&ordering=name";
    return url;
  }
  /*
   * Launches
   */
  async getLaunchById(id: string, bypassCache?: boolean) {
    const previousLaunch = this.previousLaunchesService.getPreviousLaunchById(
      id
    );
    if (previousLaunch) {
      return previousLaunch;
    }
    const object = this.getIdFromCache(this.launchesById, id);
    if (object !== undefined && !bypassCache) {
      return object;
    }
    const url = this.baseUrl + "/launch/" + id;
    const data = await this.http.get<any>(url).toPromise();
    this.launchesById.push({ id, object: data });
    return data;
  }
  async getFirstLaunches(
    search?: string,
    startDate?: Date,
    endDate?: Date,
    upcomingPreviousAll?: UpcomingPreviousAll
  ) {
    return this.getNextLaunches(
      0,
      search,
      startDate,
      endDate,
      upcomingPreviousAll
    );
  }
  async getNextLaunches(
    offset: number,
    search?: string,
    startDate?: Date,
    endDate?: Date,
    upcomingPreviousAll?: UpcomingPreviousAll
  ) {
    const url = this.createLaunchUrl(
      25,
      offset,
      search,
      startDate,
      endDate,
      upcomingPreviousAll
    );
    const data = await this.http.get<any>(url).toPromise();
    return { launches: data.results, max: data.count };
  }
  private createLaunchUrl(
    limit: number,
    offset?: number,
    search?: string,
    startDate?: Date,
    endDate?: Date,
    upcomingPreviousAll?: UpcomingPreviousAll
  ): string {
    let url = this.baseUrl + "/launch/";
    switch (upcomingPreviousAll) {
      case UpcomingPreviousAll.PREVIOUS:
        url += "previous/";
        break;
      case UpcomingPreviousAll.UPCOMING:
        url += "upcoming/";
        break;
      default:
        break;
    }
    url += "?limit=" + limit;
    if (search !== undefined && search !== "") {
      url += "&search=" + search;
    }
    if (
      startDate !== undefined &&
      (upcomingPreviousAll === undefined ||
        upcomingPreviousAll === UpcomingPreviousAll.ALL)
    ) {
      url += "&net__gte=" + this.dateToString(startDate);
    }
    if (
      endDate !== undefined &&
      (upcomingPreviousAll === undefined ||
        upcomingPreviousAll === UpcomingPreviousAll.ALL)
    ) {
      url += "&net__lte=" + this.dateToString(endDate);
    }
    if (offset !== undefined) {
      url += "&offset=" + offset;
    }
    return url;
  }

  /*
   * Generic
   */
  private dateToString(date: Date) {
    return date.toISOString();
  }
  private getIdFromCache(
    cache: { id: string; object: any }[],
    id: string
  ): any {
    const element = cache.find((cacheElement) => cacheElement.id === id);
    return element === undefined ? undefined : element.object;
  }
}
