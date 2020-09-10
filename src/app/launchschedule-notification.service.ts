import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LaunchscheduleNotificationService {
  token;
  interests: { interest }[] = [];
  interestAmounts: { interest; amount }[] = [];
  constructor(private http: HttpClient) {}
  prepare() {
    try {
      this.getAllInterestAmounts();
    } catch (error) {}
    try {
      this.getAllInterests();
    } catch (error) {}
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
    await this.http.delete(
      environment.tokenUrl + "/interest/" + interest + "/" + this.token
    );
    alert("removed");
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
    return (
      this.interests.find((otherInterest) => otherInterest === interest) !==
      undefined
    );
  }
  private async getAllInterests() {
    this.interests = await this.http
      .get<{ interest }[]>(environment.tokenUrl + "/token/" + this.token)
      .toPromise();
    console.log({ interests: this.interests });
  }
}
