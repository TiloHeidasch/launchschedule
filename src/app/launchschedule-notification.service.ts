import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LaunchscheduleNotificationService {
  private token;
  private interests: { interest }[] = [];
  private interestAmounts: { interest; amount }[] = [];
  subscribers: LaunchscheduleNotificationUpdate[] = [];
  constructor(private http: HttpClient) {}
  subscribeForUpdates(subscriber: LaunchscheduleNotificationUpdate) {
    this.subscribers.push(subscriber);
  }
  private async updateSubscribers() {
    this.subscribers.map((subscriber) => {
      this.updateSubscriber(subscriber);
    });
  }
  private async updateSubscriber(subscriber: LaunchscheduleNotificationUpdate) {
    subscriber.onUpdate();
  }
  setToken(token) {
    this.token = token;
  }
  async prepare() {
    try {
      await this.getAllInterestAmounts();
    } catch (error) {}
    try {
      await this.getAllInterests();
    } catch (error) {}
    this.updateSubscribers();
  }
  async markInterest(interest) {
    if (!this.interests.find((otherInterest) => otherInterest === interest)) {
      await this.http
        .put(environment.tokenUrl + "/interest/", {
          token: this.token,
          interest,
        })
        .toPromise();
      this.interests.push(interest);
      this.prepare();
    }
  }
  async removeInterest(interest) {
    const url =
      environment.tokenUrl + "/interest/" + interest + "/" + this.token;
    await this.http.delete<any>(url).toPromise();
    this.prepare();
  }
  async getAllInterestAmounts() {
    this.interestAmounts = await this.http
      .get<{ interest; amount }[]>(environment.tokenUrl + "/interestamounts")
      .toPromise();
    console.log({ interestAmounts: this.interestAmounts });
  }
  getAmountForInterest(interest) {
    return this.interestAmounts.find(
      (interestAmount) => interestAmount.interest === interest
    )
      ? this.interestAmounts.find(
          (interestAmount) => interestAmount.interest === interest
        ).amount
      : 0;
  }
  isInterested(interest): boolean {
    return this.interests.find((otherInterest) => otherInterest === interest)
      ? true
      : false;
  }
  private async getAllInterests() {
    this.interests = await this.http
      .get<{ interest }[]>(environment.tokenUrl + "/token/" + this.token)
      .toPromise();
    console.log({ interests: this.interests });
  }
}
export interface LaunchscheduleNotificationUpdate {
  onUpdate();
}
