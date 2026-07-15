import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StatisticService {
  private data?: Promise<any[]>;
  constructor(private http: HttpClient) {}

  getLaunches(): Promise<any[]> {
    return (this.data ??= firstValueFrom(
      this.http.get<any[]>("assets/data/launches.json")
    ));
  }
}
