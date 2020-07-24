import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaunchLibraryService {

  constructor(private http: HttpClient) { }

  /*
  * Agencies
  */
  async getAgencyAmount(search: string) {
    const url = 'https://launchlibrary.net/1.4.1/agency?name=' + search + '&limit=1';
    const data = await this.http.get<any>(url).toPromise();
    return data.total;
  }
  async getAllAgencies(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createAgencyUrl(10000, undefined, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    return data.agencies;
  }
  async getAgencyById(id: number) {
    const url = 'https://launchlibrary.net/1.4.1/agency/' + id;
    const data = await this.http.get<any>(url).toPromise();
    return data.agencies[0];
  }
  async getFirstAgencies(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    return this.getNextAgencies(0, search, startDate, endDate);
  }
  async getNextAgencies(offset: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createAgencyUrl(10, offset, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    return { agencies: data.agencies, max: data.total };
  }
  private createAgencyUrl(limit: number, offset?: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number): string {
    let url = 'https://launchlibrary.net/1.4.1/agency';
    url += '?limit=' + limit;
    if (search !== undefined && search !== '') {
      url += ('&name=' + search);
    }
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    if (startDate !== undefined) {
      url += ('&startdate=' + this.dateToString(startDate));
    }
    if (endDate !== undefined) {
      url += ('&enddate=' + this.dateToString(endDate));
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
    return url;
  }
  /*
  * Launches
  */
  async getLaunchAmount(search: string, rocketId: number, agencyId: number, padId: number, locationId: number) {
    let url = 'https://launchlibrary.net/1.4.1/launch/' + search + '?limit=1';
    if (rocketId !== undefined) {
      url += '&rocketid=' + rocketId;
    }
    if (agencyId !== undefined) {
      url += '&lsp=' + agencyId;
    }
    if (padId !== undefined) {
      url += '&locationid=' + padId;
    }
    if (locationId !== undefined) {
      url += '&padLocation=' + locationId;
    }
    const data = await this.http.get<any>(url).toPromise();
    return data.total;
  }
  async getAllLaunches(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createLaunchUrl(10000, undefined, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    return data.launches;
  }
  async getLaunchById(id: number) {
    const url = 'https://launchlibrary.net/1.4.1/launch/' + id;
    const data = await this.http.get<any>(url).toPromise();
    return data.launches[0];
  }
  async getFirstLaunches(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    return this.getNextLaunches(0, search, startDate, endDate);
  }
  async getNextLaunches(offset: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createLaunchUrl(5, offset, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    return { launches: data.launches, max: data.total };
  }
  private createLaunchUrl(limit: number, offset?: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number): string {
    let url = 'https://launchlibrary.net/1.4.1/launch/';
    if (search !== undefined && search !== '') {
      url += search;
    }
    url += '?limit=' + limit;
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    if (startDate !== undefined) {
      url += ('&startdate=' + this.dateToString(startDate));
    }
    if (endDate !== undefined) {
      url += ('&enddate=' + this.dateToString(endDate));
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
    return url;
  }

  /*
  * Location
 */

  async getAllLocations() {
    let url = 'https://launchlibrary.net/1.4.1/location?limit=10000'
    const data = await this.http.get<any>(url).toPromise();
    return data.locations;
  }
  /*
  * Missions
  */
  async getMissionAmount(search: string) {
    const url = 'https://launchlibrary.net/1.4.1/mission/' + search + '?limit=1';
    const data = await this.http.get<any>(url).toPromise();
    return data.total;
  }
  async getAllMissions(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createMissionUrl(10000, undefined, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    return data.missions;
  }
  async getMissionById(id: number) {
    const url = 'https://launchlibrary.net/1.4.1/mission/' + id;
    const data = await this.http.get<any>(url).toPromise();
    return data.missions[0];
  }
  async getFirstMissions(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    return this.getNextMissions(0, search, startDate, endDate);
  }
  async getNextMissions(offset: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createMissionUrl(10, offset, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    return { missions: data.missions, max: data.total };
  }
  private createMissionUrl(limit: number, offset?: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number): string {
    let url = 'https://launchlibrary.net/1.4.1/mission/';
    if (search !== undefined && search !== '') {
      url += search;
    }
    url += '?limit=' + limit;
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    if (startDate !== undefined) {
      url += ('&startdate=' + this.dateToString(startDate));
    }
    if (endDate !== undefined) {
      url += ('&enddate=' + this.dateToString(endDate));
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
    return url;
  }
  /*
  * Missiontype
  */
  async getMissionTypeById(id: number) {
    const url = 'https://launchlibrary.net/1.4.1/missiontype/' + id;
    const data = await this.http.get<any>(url).toPromise();
    return data.types[0];
  }

  /*
  * Pads
  */
  async getPadAmount(search: string) {
    const url = 'https://launchlibrary.net/1.4.1/pad/' + search + '?limit=1';
    const data = await this.http.get<any>(url).toPromise();
    return data.total;
  }
  async getAllPads(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createPadUrl(10000, undefined, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    return data.pads;
  }
  async getPadById(id: number) {
    const url = 'https://launchlibrary.net/1.4.1/pad/' + id;
    const data = await this.http.get<any>(url).toPromise();
    return data.pads[0];
  }
  async getFirstPads(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    return this.getNextPads(0, search, startDate, endDate);
  }
  async getNextPads(offset: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createPadUrl(10, offset, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    return { pads: data.pads, max: data.total };
  }
  private createPadUrl(limit: number, offset?: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number): string {
    let url = 'https://launchlibrary.net/1.4.1/pad/';
    if (search !== undefined && search !== '') {
      url += search;
    }
    url += '?limit=' + limit;
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    if (startDate !== undefined) {
      url += ('&startdate=' + this.dateToString(startDate));
    }
    if (endDate !== undefined) {
      url += ('&enddate=' + this.dateToString(endDate));
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
    return url;
  }


  /*
  * Payloads
  */
  async getPayloadAmount(search: string) {
    const url = 'https://launchlibrary.net/1.4.1/payload/' + search + '?limit=1';
    const data = await this.http.get<any>(url).toPromise();
    return data.total;
  }
  async getAllPayloads(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createPayloadUrl(10000, undefined, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    return data.payloads;
  }
  async getPayloadById(id: number) {
    const url = 'https://launchlibrary.net/1.4.1/payload/' + id;
    const data = await this.http.get<any>(url).toPromise();
    return data.payloads[0];
  }
  async getFirstPayloads(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    return this.getNextPayloads(0, search, startDate, endDate);
  }
  async getNextPayloads(offset: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createPayloadUrl(10, offset, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    return { payloads: data.payloads, max: data.total };
  }
  private createPayloadUrl(limit: number, offset?: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number): string {
    let url = 'https://launchlibrary.net/1.4.1/payload/';
    if (search !== undefined && search !== '') {
      url += search;
    }
    url += '?limit=' + limit;
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    if (startDate !== undefined) {
      url += ('&startdate=' + this.dateToString(startDate));
    }
    if (endDate !== undefined) {
      url += ('&enddate=' + this.dateToString(endDate));
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
    return url;
  }

  /*
  * Rockets
  */
  async getRocketAmount(search: string) {
    const url = 'https://launchlibrary.net/1.4.1/rocket/' + search + '?limit=1';
    const data = await this.http.get<any>(url).toPromise();
    return data.total;
  }
  async getAllRockets(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    let url = this.createRocketUrl(10000, undefined, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    return data.rockets;
  }
  async getRocketById(id: number) {
    const url = 'https://launchlibrary.net/1.4.1/rocket/' + id;
    const data = await this.http.get<any>(url).toPromise();
    return data.rockets[0];
  }
  async getFirstRockets(search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    return this.getNextRockets(0, search, startDate, endDate);
  }
  async getNextRockets(offset: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number) {
    const url = this.createRocketUrl(5, offset, search, startDate, endDate, padId, locationId, rocketId, agencyId);
    const data = await this.http.get<any>(url).toPromise();
    return { rockets: data.rockets, max: data.total };
  }
  private createRocketUrl(limit: number, offset?: number, search?: string, startDate?: Date, endDate?: Date, padId?: number, locationId?: number, rocketId?: number, agencyId?: number): string {

    let url = 'https://launchlibrary.net/1.4.1/rocket/';
    if (search !== undefined && search !== '') {
      url += search;
    }
    url += '?limit=' + limit;
    if (offset !== undefined) {
      url += ('&offset=' + offset);
    }
    if (startDate !== undefined) {
      url += ('&startdate=' + this.dateToString(startDate));
    }
    if (endDate !== undefined) {
      url += ('&enddate=' + this.dateToString(endDate));
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

    return url;
  }

  /*
  * Generic
  */
  private dateToString(date: Date) {
    return date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1) + '-' + date.getUTCDate();
  }
}
