import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@awesome-cordova-plugins/splash-screen/ngx";
import { StatusBar } from "@awesome-cordova-plugins/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LaunchLibraryService } from "./launch-library.service";
import { PrimeNGModule } from "./prime-ng/prime-ng.module";
import { LaunchscheduleNotificationService } from "./launchschedule-notification.service";
import { StorageService } from "./storage.service";
import { PreviousLaunchService } from "./masterdata/previous-launches.service";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LaunchLibraryService,
    PreviousLaunchService,
    LaunchscheduleNotificationService,
    StorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
