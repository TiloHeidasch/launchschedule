import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { UpcomingPreviousAll } from './types/upcoming-previous-all';

@Injectable({
  providedIn: 'root'
})
export class LaunchLibraryService {
  baseUrl: string = environment.launchLibrary;
  calls: number = 0;
  agenciesById: { id: string, object: any }[] = [];
  astronautsById: { id: string, object: any }[] = [];
  eventsById: { id: string, object: any }[] = [];
  launchesById: { id: string, object: any }[] = [];
  locationsById: { id: string, object: any }[] = [];
  padsById: { id: string, object: any }[] = [];
  payloadsById: { id: string, object: any }[] = [];
  rocketsById: { id: string, object: any }[] = [];
  spacecraftsById: { id: string, object: any }[] = [];
  spacestationsById: { id: string, object: any }[] = [];
  constructor(private http: HttpClient) { }

  /*
  * Agencies
  */
  async getAgencyAmount(search: string) {
    const url = this.baseUrl + '/2.0.0/agencies?search=' + search + '&limit=1';
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.count;
  }
  async getAllAgencies(search?: string, featured?: boolean, type?: string, countryCode?: string) {
    let url = this.createAgencyUrl(10000, undefined, search, featured, type, countryCode);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.results;
  }
  async getAgencyById(id: string) {
    const object = this.getIdFromCache(this.agenciesById, id);
    if (object !== undefined) {
      return object;
    }
    const url = this.baseUrl + '/2.0.0/agencies/' + id + '?mode=detailed';
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    this.agenciesById.push({ id, object: data });
    return data;
  }
  async getFirstAgencies(search?: string, featured?: boolean, type?: string, countryCode?: string) {
    return this.getNextAgencies(0, search, featured, type, countryCode);
  }
  async getNextAgencies(offset: number, search?: string, featured?: boolean, type?: string, countryCode?: string) {
    let url = this.createAgencyUrl(10, offset, search, featured, type, countryCode);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return { agencies: data.results, max: data.count };
  }
  private createAgencyUrl(limit: number, offset?: number, search?: string, featured?: boolean, type?: string, countryCode?: string): string {
    let url = this.baseUrl + '/2.0.0/agencies/?mode=detailed';
    url += '&limit=' + limit;
    if (search !== undefined && search !== '') {
      url += ('&search=' + search);
    }
    if (featured) {
      url += '&featured=true';
    }
    if (type !== undefined && type !== '') {
      url += ('&agency_type=' + type);
    }
    if (countryCode !== undefined && countryCode !== '') {
      url += ('&country_code=' + countryCode);
    }
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    return url;
  }
  /*
  * Astronaut
 */
  async getAstronautAmount(search: string) {
    const url = this.baseUrl + '/2.0.0/astronaut/' + search + '?limit=1';
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.count;
  }
  async getAllAstronauts(search?: string, status?: number) {
    let url = this.createAstronautUrl(10000, undefined, search, status);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.results;
  }
  async getAstronautById(id: string) {
    const object = this.getIdFromCache(this.astronautsById, id);
    if (object !== undefined) {
      return object;
    }
    const url = this.baseUrl + '/2.0.0/astronaut/' + id + '?mode=detailed';
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    this.astronautsById.push({ id, object: data });
    return data;
  }
  async getFirstAstronauts(search?: string, status?: number) {
    return this.getNextAstronauts(0, search, status);
  }
  async getNextAstronauts(offset: number, search?: string, status?: number) {
    let url = this.createAstronautUrl(10, offset, search, status);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return { astronauts: data.results, max: data.count };
  }
  private createAstronautUrl(limit: number, offset?: number, search?: string, status?: number): string {
    let url = this.baseUrl + '/2.0.0/astronaut/';
    url += '?limit=' + limit;
    if (search !== undefined && search !== '') {
      url += ('&search=' + search);
    }
    if (status !== undefined && status !== 0) {
      url += ('&status=' + status);
    }
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    url += '&ordering=name';
    return url;
  }
  /*
  * Event
 */
  async getEventAmount(search: string) {
    const url = this.baseUrl + '/2.0.0/event/upcoming/' + search + '?limit=1';
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.count;
  }
  async getAllEvents(search?: string, status?: number, upcomingPreviousAll?: UpcomingPreviousAll) {
    let url = this.createEventUrl(10000, undefined, search, status, upcomingPreviousAll);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.results;
  }
  async getEventById(id: string) {
    const object = this.getIdFromCache(this.eventsById, id);
    if (object !== undefined) {
      return object;
    }
    const url = this.baseUrl + '/2.0.0/event/' + id;
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    this.eventsById.push({ id, object: data });
    return data;
  }
  async getFirstEvents(search?: string, status?: number, upcomingPreviousAll?: UpcomingPreviousAll) {
    return this.getNextEvents(0, search, status, upcomingPreviousAll);
  }
  async getNextEvents(offset: number, search?: string, status?: number, upcomingPreviousAll?: UpcomingPreviousAll) {
    let url = this.createEventUrl(10, offset, search, status, upcomingPreviousAll);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return { events: data.results, max: data.count };
  }
  private createEventUrl(limit: number, offset?: number, search?: string, status?: number, upcomingPreviousAll?: UpcomingPreviousAll): string {
    let url = this.baseUrl + '/2.0.0/event/';
    switch (upcomingPreviousAll) {
      case UpcomingPreviousAll.PREVIOUS:
        url += 'previous/';
        break;
      case UpcomingPreviousAll.UPCOMING:
        url += 'upcoming/';
        break;
      default:
        break;
    }
    url += '?limit=' + limit;
    if (search !== undefined && search !== '') {
      url += ('&search=' + search);
    }
    if (status !== undefined && status !== 0) {
      url += ('&status=' + status);
    }
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    url += '&ordering=name';
    return url;
  }
  /*
  * Launches
  */
  async getLaunchAmount(search: string, rocketId: number, agencyId: number, padId: number, locationId: number) {
    let url = this.baseUrl + '/2.0.0/launch/' + search + '?limit=1';
    if (rocketId !== undefined) {
      url += '&rocket__configuration__id=' + rocketId;
    }
    if (agencyId !== undefined) {
      url += '&lsp__id=' + agencyId;
    }
    if (padId !== undefined) {
      url += '&pad__id=' + padId;
    }
    if (locationId !== undefined) {
      url += '&location__ids=' + locationId;
    }
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.count;
  }
  async getAllLaunches(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number, upcomingPreviousAll?: UpcomingPreviousAll) {
    let url = this.createLaunchUrl(10000, undefined, search, startDate, endDate, padId, locationId, rocketId, agencyId, upcomingPreviousAll);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.results;
  }
  async getLaunchById(id: string) {
    const object = this.getIdFromCache(this.launchesById, id);
    if (object !== undefined) {
      return object;
    }
    const url = this.baseUrl + '/2.0.0/launch/' + id;
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    this.launchesById.push({ id, object: data });
    return data;
  }
  async getFirstLaunches(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number, upcomingPreviousAll?: UpcomingPreviousAll) {
    return this.getNextLaunches(0, search, startDate, endDate, padId, locationId, rocketId, agencyId, upcomingPreviousAll);
  }
  async getNextLaunches(offset: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number, upcomingPreviousAll?: UpcomingPreviousAll) {
    let url = this.createLaunchUrl(10, offset, search, startDate, endDate, padId, locationId, rocketId, agencyId, upcomingPreviousAll);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return { launches: data.results, max: data.count };
  }
  private createLaunchUrl(limit: number, offset?: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number, upcomingPreviousAll?: UpcomingPreviousAll): string {
    let url = this.baseUrl + '/2.0.0/launch/';
    switch (upcomingPreviousAll) {
      case UpcomingPreviousAll.PREVIOUS:
        url += 'previous/';
        break;
      case UpcomingPreviousAll.UPCOMING:
        url += 'upcoming/';
        break;
      default:
        break;
    }
    url += '?limit=' + limit;
    if (search !== undefined && search !== '') {
      url += ('&search=' + search);
    }
    if (startDate !== undefined && (upcomingPreviousAll === undefined || upcomingPreviousAll === UpcomingPreviousAll.ALL)) {
      url += ('&net__gte=' + this.dateToString(startDate));
    }
    if (endDate !== undefined && (upcomingPreviousAll === undefined || upcomingPreviousAll === UpcomingPreviousAll.ALL)) {
      url += ('&net__lte=' + this.dateToString(endDate));
    }
    if (padId !== undefined && padId !== 0) {
      url += ('&padid=' + padId);
    }
    if (locationId !== undefined && locationId !== 0) {
      url += ('&locationid=' + locationId);
    }
    if (rocketId !== undefined && rocketId !== 0) {
      url += ('&rocketid=' + rocketId);
    }
    if (agencyId !== undefined && agencyId !== 0) {
      url += ('&lsp=' + agencyId);
    }
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    return url;
  }

  /*
  * Location
 */
  async getLocationAmount(search: string) {
    const url = this.baseUrl + '/2.0.0/location/' + search + '?limit=1';
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.count;
  }
  async getAllLocations(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createLocationUrl(10000, undefined, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.results;
  }
  async getLocationById(id: string) {
    const object = this.getIdFromCache(this.locationsById, id);
    if (object !== undefined) {
      return object;
    }
    const url = this.baseUrl + '/2.0.0/location/' + id;
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    this.locationsById.push({ id, object: data });
    return data;
  }
  async getFirstLocations(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    return this.getNextLocations(0, search, startDate, endDate);
  }
  async getNextLocations(offset: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createLocationUrl(10, offset, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return { locations: data.results, max: data.count };
  }
  private createLocationUrl(limit: number, offset?: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number): string {
    let url = this.baseUrl + '/2.0.0/location/';
    url += '?limit=' + limit;
    if (search !== undefined && search !== '') {
      url += ('&search=' + search);
    }
    if (startDate !== undefined) {
      url += ('&net__gte=' + this.dateToString(startDate));
    }
    if (endDate !== undefined) {
      url += ('&net__lte=' + this.dateToString(endDate));
    }
    if (padId !== undefined && padId !== 0) {
      url += ('&padid=' + padId);
    }
    if (locationId !== undefined && locationId !== 0) {
      url += ('&locationid=' + locationId);
    }
    if (rocketId !== undefined && rocketId !== 0) {
      url += ('&rocketid=' + rocketId);
    }
    if (agencyId !== undefined && agencyId !== 0) {
      url += ('&lsp=' + agencyId);
    }
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    return url;
  }
  /*
  * Pads
  */
  async getPadAmount(search: string) {
    const url = this.baseUrl + '/2.0.0/pad/' + search + '?limit=1';
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.count;
  }
  async getAllPads(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createPadUrl(10000, undefined, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.results;
  }
  async getPadById(id: string) {
    const object = this.getIdFromCache(this.padsById, id);
    if (object !== undefined) {
      return object;
    }
    const url = this.baseUrl + '/2.0.0/pad/' + id;
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    this.padsById.push({ id, object: data });
    return data;
  }
  async getFirstPads(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    return this.getNextPads(0, search, startDate, endDate);
  }
  async getNextPads(offset: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createPadUrl(10, offset, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return { pads: data.results, max: data.count };
  }
  private createPadUrl(limit: number, offset?: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number): string {
    let url = this.baseUrl + '/2.0.0/pad/';
    url += '?limit=' + limit;
    if (search !== undefined && search !== '') {
      url += ('&search=' + search);
    }
    if (startDate !== undefined) {
      url += ('&net__gte=' + this.dateToString(startDate));
    }
    if (endDate !== undefined) {
      url += ('&net__lte=' + this.dateToString(endDate));
    }
    if (padId !== undefined && padId !== 0) {
      url += ('&padid=' + padId);
    }
    if (locationId !== undefined && locationId !== 0) {
      url += ('&locationid=' + locationId);
    }
    if (rocketId !== undefined && rocketId !== 0) {
      url += ('&rocketid=' + rocketId);
    }
    if (agencyId !== undefined && agencyId !== 0) {
      url += ('&lsp=' + agencyId);
    }
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    return url;
  }

  /*
  * Payloads
  */
  async getPayloadAmount(search: string) {
    const url = this.baseUrl + '/2.0.0/config/spacecraft/' + search + '?limit=1';
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.count;
  }
  async getAllPayloads(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createPayloadUrl(10000, undefined, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.payloads;
  }
  async getPayloadById(id: string) {
    const object = this.getIdFromCache(this.payloadsById, id);
    if (object !== undefined) {
      return object;
    }
    const url = this.baseUrl + '/2.0.0/config/spacecraft/' + id;
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    this.payloadsById.push({ id, object: data });
    return data;
  }
  async getFirstPayloads(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    return this.getNextPayloads(0, search, startDate, endDate);
  }
  async getNextPayloads(offset: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createPayloadUrl(10, offset, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return { payloads: data.payloads, max: data.count };
  }
  private createPayloadUrl(limit: number, offset?: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number): string {
    let url = this.baseUrl + '/2.0.0/config/spacecraft/';
    url += '?limit=' + limit;
    if (search !== undefined && search !== '') {
      url += ('&search=' + search);
    }
    if (startDate !== undefined) {
      url += ('&net__gte=' + this.dateToString(startDate));
    }
    if (endDate !== undefined) {
      url += ('&net__lte=' + this.dateToString(endDate));
    }
    if (padId !== undefined && padId !== 0) {
      url += ('&padid=' + padId);
    }
    if (locationId !== undefined && locationId !== 0) {
      url += ('&locationid=' + locationId);
    }
    if (rocketId !== undefined && rocketId !== 0) {
      url += ('&rocketid=' + rocketId);
    }
    if (agencyId !== undefined && agencyId !== 0) {
      url += ('&lsp=' + agencyId);
    }
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    return url;
  }

  /*
  * Rockets
  */
  async getRocketAmount(search: string) {
    const url = this.baseUrl + '/2.0.0/config/launcher/' + search + '?limit=1';
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.count;
  }
  async getAllRockets(search?: string, active?: boolean, reusable?: boolean) {
    let url = this.createRocketUrl(10000, undefined, search, active, reusable);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.results;
  }
  async getRocketById(id: string) {
    const object = this.getIdFromCache(this.rocketsById, id);
    if (object !== undefined) {
      return object;
    }
    const url = this.baseUrl + '/2.0.0/config/launcher/' + id;
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    this.rocketsById.push({ id, object: data });
    return data;
  }
  async getFirstRockets(search?: string, active?: boolean, reusable?: boolean) {
    return this.getNextRockets(0, search, active, reusable);
  }
  async getNextRockets(offset: number, search?: string, active?: boolean, reusable?: boolean) {
    const url = this.createRocketUrl(10, offset, search, active, reusable);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return { rockets: data.results, max: data.count };
  }
  private createRocketUrl(limit: number, offset?: number, search?: string, active?: boolean, reusable?: boolean): string {

    let url = this.baseUrl + '/2.0.0/config/launcher/';
    url += '?limit=' + limit;
    if (search !== undefined && search !== '') {
      url += ('&search=' + search);
    }
    if (active) {
      url += ('&active=' + active);
    } else {
      url += '&active=false';
    }
    if (reusable) {
      url += ('&reusable=' + reusable);
    } else {
      url += '&reusable=false';
    }

    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    return url;
  }

  /*
  * Spacecraft
 */
  async getSpacecraftAmount(search: string) {
    const url = this.baseUrl + '/2.0.0/config/spacecraft/' + search + '?limit=1';
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.count;
  }
  async getAllSpacecrafts(search?: string, status?: number) {
    let url = this.createSpacecraftUrl(10000, undefined, search, status);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.results;
  }
  async getSpacecraftById(id: string) {
    const object = this.getIdFromCache(this.spacecraftsById, id);
    if (object !== undefined) {
      return object;
    }
    const url = this.baseUrl + '/2.0.0/config/spacecraft/' + id;
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    this.spacecraftsById.push({ id, object: data });
    return data;
  }
  async getFirstSpacecrafts(search?: string, status?: number) {
    return this.getNextSpacecrafts(0, search, status);
  }
  async getNextSpacecrafts(offset: number, search?: string, status?: number) {
    let url = this.createSpacecraftUrl(10, offset, search, status);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return { spacecrafts: data.results, max: data.count };
  }
  private createSpacecraftUrl(limit: number, offset?: number, search?: string, status?: number): string {
    let url = this.baseUrl + '/2.0.0/config/spacecraft/';
    url += '?limit=' + limit;
    if (search !== undefined && search !== '') {
      url += ('&search=' + search);
    }
    if (status !== undefined && status !== 0) {
      url += ('&status=' + status);
    }
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    url += '&ordering=name';
    return url;
  }
  /*
  * Spacestation
 */
  async getSpacestationAmount(search: string) {
    const url = this.baseUrl + '/2.0.0/spacestation/' + search + '?limit=1';
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.count;
  }
  async getAllSpacestations(search?: string, status?: number) {
    let url = this.createSpacestationUrl(10000, undefined, search, status);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return data.results;
  }
  async getSpacestationById(id: string) {
    const object = this.getIdFromCache(this.spacestationsById, id);
    if (object !== undefined) {
      return object;
    }
    const url = this.baseUrl + '/2.0.0/spacestation/' + id;
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    this.spacestationsById.push({ id, object: data });
    return data;
  }
  async getFirstSpacestations(search?: string, status?: number) {
    return this.getNextSpacestations(0, search, status);
  }
  async getNextSpacestations(offset: number, search?: string, status?: number) {
    let url = this.createSpacestationUrl(10, offset, search, status);
    const data = await this.http.get<any>(url).toPromise();
    this.calls++;
    console.log({ call: this.calls, url, data });
    return { spacestations: data.results, max: data.count };
  }
  private createSpacestationUrl(limit: number, offset?: number, search?: string, status?: number): string {
    let url = this.baseUrl + '/2.0.0/spacestation/';
    url += '?limit=' + limit;
    if (search !== undefined && search !== '') {
      url += ('&search=' + search);
    }
    if (status !== undefined && status !== 0) {
      url += ('&status=' + status);
    }
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    url += '&ordering=name';
    return url;
  }
  /*
  * Generic
  */
  private dateToString(date: Date) {
    return date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1) + '-' + date.getUTCDate();
  }
  private getIdFromCache(cache: { id: string, object: any }[] = [], id: string): any {
    const element = cache.find(cacheElement => (cacheElement.id === id));
    return element === undefined ? undefined : element.object;
  }
}
