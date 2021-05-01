import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LaunchLibraryService } from "./launch-library.service";
import { PrimeNGModule } from "./prime-ng/prime-ng.module";
import { LaunchscheduleNotificationService } from "./launchschedule-notification.service";
import { StorageService } from "./storage.service";
import { BrowserService } from "./browser.service";
import { RocketService } from "./masterdata/rocket.service";
import { AgencyService } from "./masterdata/agency.service";
import { AstronautService } from "./masterdata/astronaut.service";
import { SpacestationService } from "./masterdata/spacestation.service";
import { SpacecraftService } from "./masterdata/spacecraft.service";
import { LocationService } from "./masterdata/location.service";
import { PadService } from "./masterdata/pad.service";
import { PreviousLaunchService } from "./masterdata/previous-launches.service";

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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LaunchLibraryService,
    AgencyService,
    AstronautService,
    LocationService,
    PadService,
    PreviousLaunchService,
    RocketService,
    SpacecraftService,
    SpacestationService,
    LaunchscheduleNotificationService,
    StorageService,
    BrowserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
