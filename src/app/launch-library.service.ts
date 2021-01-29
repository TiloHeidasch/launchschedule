import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { UpcomingPreviousAll } from "./types/upcoming-previous-all";
import { Active } from "./types/active";
import { Reusable } from "./types/reusable";
import { HumanRated } from "./types/human-rated";

@Injectable({
  providedIn: "root",
})
export class LaunchLibraryService {
  baseUrl: string = environment.launchLibrary;
  agenciesById: { id: string; object: any }[] = [];
  astronautsById: { id: string; object: any }[] = [];
  eventsById: { id: string; object: any }[] = [];
  launchesById: { id: string; object: any }[] = [];
  locationsById: { id: string; object: any }[] = [];
  padsById: { id: string; object: any }[] = [];
  payloadsById: { id: string; object: any }[] = [];
  rocketsById: { id: string; object: any }[] = [];
  spacecraftsById: { id: string; object: any }[] = [];
  spacestationsById: { id: string; object: any }[] = [];
  constructor(private http: HttpClient) {}

  /*
   * Agencies
   */
  async getAgencyById(id: string, bypassCache?: boolean) {
    const object = this.getIdFromCache(this.agenciesById, id);
    if (object !== undefined && !bypassCache) {
      return object;
    }
    const url = this.baseUrl + "/2.1.0/agencies/" + id + "?mode=detailed";
    const data = await this.http.get<any>(url).toPromise();
    this.agenciesById.push({ id, object: data });
    return data;
  }
  async getFirstAgencies(
    search?: string,
    featured?: boolean,
    type?: string,
    countryCode?: string
  ) {
    return this.getNextAgencies(0, search, featured, type, countryCode);
  }
  async getNextAgencies(
    offset: number,
    search?: string,
    featured?: boolean,
    type?: string,
    countryCode?: string
  ) {
    const url = this.createAgencyUrl(
      13,
      offset,
      search,
      featured,
      type,
      countryCode
    );
    const data = await this.http.get<any>(url).toPromise();
    return { agencies: data.results, max: data.count };
  }
  private createAgencyUrl(
    limit: number,
    offset?: number,
    search?: string,
    featured?: boolean,
    type?: string,
    countryCode?: string
  ): string {
    let url = this.baseUrl + "/2.1.0/agencies/?mode=detailed";
    url += "&limit=" + limit;
    if (search !== undefined && search !== "") {
      url += "&search=" + search;
    }
    if (featured) {
      url += "&featured=true";
    }
    if (type !== undefined && type !== "") {
      url += "&agency_type=" + type;
    }
    if (countryCode !== undefined && countryCode !== "") {
      url += "&country_code=" + countryCode;
    }
    if (offset !== undefined) {
      url += "&offset=" + offset;
    }
    return url;
  }
  /*
   * Astronaut
   */
  async getAstronautById(id: string, bypassCache?: boolean) {
    const object = this.getIdFromCache(this.astronautsById, id);
    if (object !== undefined && !bypassCache) {
      return object;
    }
    const url = this.baseUrl + "/2.1.0/astronaut/" + id + "?mode=detailed";
    const data = await this.http.get<any>(url).toPromise();
    this.astronautsById.push({ id, object: data });
    return data;
  }
  async getFirstAstronauts(search?: string, status?: number) {
    return this.getNextAstronauts(0, search, status);
  }
  async getNextAstronauts(offset: number, search?: string, status?: number) {
    const url = this.createAstronautUrl(20, offset, search, status);
    const data = await this.http.get<any>(url).toPromise();
    return { astronauts: data.results, max: data.count };
  }
  private createAstronautUrl(
    limit: number,
    offset?: number,
    search?: string,
    status?: number
  ): string {
    let url = this.baseUrl + "/2.1.0/astronaut/";
    url += "?limit=" + limit;
    if (search !== undefined && search !== "") {
      url += "&search=" + search;
    }
    if (status !== undefined && status !== 0) {
      url += "&status=" + status;
    }
    if (offset !== undefined) {
      url += "&offset=" + offset;
    }
    url += "&ordering=name";
    return url;
  }
  /*
   * Event
   */
  async getEventById(id: string, bypassCache?: boolean) {
    const object = this.getIdFromCache(this.eventsById, id);
    if (object !== undefined && !bypassCache) {
      return object;
    }
    const url = this.baseUrl + "/2.1.0/event/" + id;
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
      10,
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
    let url = this.baseUrl + "/2.1.0/event/";
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
    const object = this.getIdFromCache(this.launchesById, id);
    if (object !== undefined && !bypassCache) {
      return object;
    }
    const url = this.baseUrl + "/2.1.0/launch/" + id;
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
      10,
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
    let url = this.baseUrl + "/2.1.0/launch/";
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
   * Location
   */
  async getLocationById(id: string, bypassCache?: boolean) {
    const object = this.getIdFromCache(this.locationsById, id);
    if (object !== undefined && !bypassCache) {
      return object;
    }
    const url = this.baseUrl + "/2.1.0/location/" + id;
    const data = await this.http.get<any>(url).toPromise();
    this.locationsById.push({ id, object: data });
    return data;
  }
  async getFirstLocations(search?: string, countryCode?: string) {
    return this.getNextLocations(0, search, countryCode);
  }
  async getNextLocations(
    offset: number,
    search?: string,
    countryCode?: string
  ) {
    const url = this.createLocationUrl(10, offset, search, countryCode);
    const data = await this.http.get<any>(url).toPromise();
    return { locations: data.results, max: data.count };
  }
  private createLocationUrl(
    limit: number,
    offset?: number,
    search?: string,
    countryCode?: string
  ): string {
    let url = this.baseUrl + "/2.1.0/location/";
    url += "?limit=" + limit;
    if (search !== undefined && search !== "") {
      url += "&search=" + search;
    }
    if (countryCode !== undefined && countryCode !== "") {
      url += "&country_code=" + countryCode;
    }
    if (offset !== undefined) {
      url += "&offset=" + offset;
    }
    return url;
  }
  /*
   * Pads
   */
  async getPadById(id: string, bypassCache?: boolean) {
    const object = this.getIdFromCache(this.padsById, id);
    if (object !== undefined && !bypassCache) {
      return object;
    }
    const url = this.baseUrl + "/2.1.0/pad/" + id;
    const data = await this.http.get<any>(url).toPromise();
    this.padsById.push({ id, object: data });
    return data;
  }
  async getFirstPads(search?: string) {
    return this.getNextPads(0, search);
  }
  async getNextPads(offset: number, search?: string) {
    const url = this.createPadUrl(10, offset, search);
    const data = await this.http.get<any>(url).toPromise();
    return { pads: data.results, max: data.count };
  }
  private createPadUrl(
    limit: number,
    offset?: number,
    search?: string
  ): string {
    let url = this.baseUrl + "/2.1.0/pad/";
    url += "?limit=" + limit;
    if (search !== undefined && search !== "") {
      url += "&search=" + search;
    }
    if (offset !== undefined) {
      url += "&offset=" + offset;
    }
    return url;
  }

  /*
   * Rockets
   */
  async getRocketById(id: string, bypassCache?: boolean) {
    const object = this.getIdFromCache(this.rocketsById, id);
    if (object !== undefined && !bypassCache) {
      return object;
    }
    const url = this.baseUrl + "/2.1.0/config/launcher/" + id;
    const data = await this.http.get<any>(url).toPromise();
    this.rocketsById.push({ id, object: data });
    return data;
  }
  async getFirstRockets(search?: string, active?: Active, reusable?: Reusable) {
    return this.getNextRockets(0, search, active, reusable);
  }
  async getNextRockets(
    offset: number,
    search?: string,
    active?: Active,
    reusable?: Reusable
  ) {
    const url = this.createRocketUrl(10, offset, search, active, reusable);
    const data = await this.http.get<any>(url).toPromise();
    return { rockets: data.results, max: data.count };
  }
  private createRocketUrl(
    limit: number,
    offset?: number,
    search?: string,
    active?: Active,
    reusable?: Reusable
  ): string {
    let url = this.baseUrl + "/2.1.0/config/launcher/";
    url += "?limit=" + limit;
    if (search !== undefined && search !== "") {
      url += "&search=" + search;
    }
    if (active === Active.ACTIVE) {
      url += "&active=true";
    }
    if (active === Active.DECOMISSIONED) {
      url += "&active=false";
    }
    if (reusable === Reusable.REUSABLE) {
      url += "&reusable=true";
    }
    if (reusable === Reusable.EXPENDABLE) {
      url += "&reusable=false";
    }

    if (offset !== undefined) {
      url += "&offset=" + offset;
    }
    return url;
  }

  /*
   * Spacecraft
   */
  async getSpacecraftById(id: string, bypassCache?: boolean) {
    const object = this.getIdFromCache(this.spacecraftsById, id);
    if (object !== undefined && !bypassCache) {
      return object;
    }
    const url = this.baseUrl + "/2.1.0/config/spacecraft/" + id;
    const data = await this.http.get<any>(url).toPromise();
    this.spacecraftsById.push({ id, object: data });
    return data;
  }
  async getFirstSpacecrafts(
    search?: string,
    inUse?: Active,
    humanRated?: HumanRated
  ) {
    return this.getNextSpacecrafts(0, search, inUse, humanRated);
  }
  async getNextSpacecrafts(
    offset: number,
    search?: string,
    inUse?: Active,
    humanRated?: HumanRated
  ) {
    const url = this.createSpacecraftUrl(10, offset, search, inUse, humanRated);
    const data = await this.http.get<any>(url).toPromise();
    return { spacecrafts: data.results, max: data.count };
  }
  private createSpacecraftUrl(
    limit: number,
    offset?: number,
    search?: string,
    inUse?: Active,
    humanRated?: HumanRated
  ): string {
    let url = this.baseUrl + "/2.1.0/config/spacecraft/";
    url += "?limit=" + limit;
    if (search !== undefined && search !== "") {
      url += "&search=" + search;
    }
    if (inUse === Active.ACTIVE) {
      url += "&in_use=true";
    }
    if (inUse === Active.DECOMISSIONED) {
      url += "&in_use=false";
    }
    if (humanRated === HumanRated.HUMAN) {
      url += "&human_rated=true";
    }
    if (humanRated === HumanRated.CARGO) {
      url += "&human_rated=false";
    }
    if (offset !== undefined) {
      url += "&offset=" + offset;
    }
    url += "&ordering=name";
    return url;
  }
  /*
   * Spacestation
   */
  async getSpacestationById(id: string, bypassCache?: boolean) {
    const object = this.getIdFromCache(this.spacestationsById, id);
    if (object !== undefined && !bypassCache) {
      return object;
    }
    const url = this.baseUrl + "/2.1.0/spacestation/" + id;
    const data = await this.http.get<any>(url).toPromise();
    this.spacestationsById.push({ id, object: data });
    return data;
  }
  async getFirstSpacestations(
    search?: string,
    status?: number,
    orbit?: number,
    type?: number
  ) {
    return this.getNextSpacestations(0, search, status, orbit, type);
  }
  async getNextSpacestations(
    offset: number,
    search?: string,
    status?: number,
    orbit?: number,
    type?: number
  ) {
    const url = this.createSpacestationUrl(
      10,
      offset,
      search,
      status,
      orbit,
      type
    );
    const data = await this.http.get<any>(url).toPromise();
    return { spacestations: data.results, max: data.count };
  }
  private createSpacestationUrl(
    limit: number,
    offset?: number,
    search?: string,
    status?: number,
    orbit?: number,
    type?: number
  ): string {
    let url = this.baseUrl + "/2.1.0/spacestation/";
    url += "?limit=" + limit;
    if (search !== undefined && search !== "") {
      url += "&search=" + search;
    }
    if (status !== undefined && status !== 0) {
      url += "&status=" + status;
    }
    if (orbit !== undefined) {
      url += "&orbit=" + orbit;
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
