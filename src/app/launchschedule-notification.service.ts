import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LaunchscheduleNotificationService {
  private token;
  private interests: { type; id }[] = [];
  private interestAmounts: { interest: { type; id }; amount }[] = [];
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
  async markInterest(type, id): Promise<boolean> {
    if (!this.token) {
      return false;
    }
    if (
      !this.interests.find(
        (otherInterest) =>
          otherInterest.id === id && otherInterest.type === type
      )
    ) {
      await this.http
        .post(
          environment.notificationUrl +
            "?token=" +
            this.token +
            "&id=" +
            id +
            "&type=" +
            type,
          {}
        )
        .toPromise();
      this.interests.push({ id, type });
      this.prepare();
    }
    return true;
  }
  async removeInterest(type, id): Promise<boolean> {
    if (!this.token) {
      return false;
    }
    const url =
      environment.notificationUrl +
      "?type=" +
      type +
      "&id" +
      id +
      "&token" +
      this.token;
    await this.http.delete(url).toPromise();
    this.prepare();
    return true;
  }
  async getAllInterestAmounts() {
    this.interestAmounts = await this.http
      .get<{ interest: { id; type }; amount }[]>(
        environment.notificationUrl + "/amount"
      )
      .toPromise();
    console.log({ interestAmounts: this.interestAmounts });
  }
  getAmountForInterest(type, id) {
    id = id + "";
    return this.interestAmounts.find(
      (interestAmount) =>
        interestAmount.interest.type === type &&
        interestAmount.interest.id === id
    )
      ? this.interestAmounts.find(
          (interestAmount) =>
            interestAmount.interest.type === type &&
            interestAmount.interest.id === id
        ).amount
      : 0;
  }
  isInterested(type, id): boolean {
    id = id + "";
    return this.interests.find(
      (otherInterest) => otherInterest.type === type && otherInterest.id === id
    )
      ? true
      : false;
  }
  private async getAllInterests() {
    this.interests = (
      await this.http
        .get<any[]>(environment.notificationUrl + "?token=" + this.token)
        .toPromise()
    ).map((notification) => ({
      id: notification.interest.id,
      type: notification.interest.type,
    }));
    console.log({ interests: this.interests });
  }
}
export interface LaunchscheduleNotificationUpdate {
  onUpdate();
}
