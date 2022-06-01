import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SwUpdate } from "@angular/service-worker";
import { SwUpdateServerMock } from "./swUpdate-server.mock.service";

describe("AppComponent", () => {
  let statusBarSpy;
  let splashScreenSpy;
  let platformReadySpy;
  let platformSpy;

  beforeEach(() => {
    statusBarSpy = jasmine.createSpyObj("StatusBar", ["styleDefault"]);
    splashScreenSpy = jasmine.createSpyObj("SplashScreen", ["hide"]);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj("Platform", { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
        { provide: SwUpdate, useClass: SwUpdateServerMock },
      ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
  });

  it("should create the app", async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should initialize the app", async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

  it("should have menu labels", async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll("ion-label");
    expect(menuItems.length).toEqual(16);
    expect(menuItems[0].textContent).toContain("Launch");
    expect(menuItems[1].textContent).toContain("Event");
    expect(menuItems[2].textContent).toContain("Statistic");
    expect(menuItems[3].textContent).toContain("News");
    expect(menuItems[4].textContent).toContain("3D Solar System");
    expect(menuItems[5].textContent).toContain("NASA Images");
    expect(menuItems[6].textContent).toContain("SpaceX Starship");
    expect(menuItems[7].textContent).toContain("Agency");
    expect(menuItems[8].textContent).toContain("Astronaut");
    expect(menuItems[9].textContent).toContain("Facility");
    expect(menuItems[10].textContent).toContain("Pad");
    expect(menuItems[11].textContent).toContain("Rocket");
    expect(menuItems[12].textContent).toContain("Spacecraft");
    expect(menuItems[13].textContent).toContain("Spacestation");
    expect(menuItems[14].textContent).toContain("Dark Theme");
    expect(menuItems[15].textContent).toContain("About");
  });

  it("should have urls", async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll("ion-item");
    expect(menuItems.length).toEqual(20);
    expect(menuItems[1].getAttribute("ng-reflect-router-link")).toEqual(
      "/launch"
    );
    expect(menuItems[2].getAttribute("ng-reflect-router-link")).toEqual(
      "/event"
    );
    expect(menuItems[3].getAttribute("ng-reflect-router-link")).toEqual(
      "/statistic"
    );
    expect(menuItems[4].getAttribute("ng-reflect-router-link")).toEqual(
      "/news"
    );
    expect(menuItems[5].getAttribute("ng-reflect-router-link")).toEqual(
      "/solar-system"
    );
    expect(menuItems[6].getAttribute("ng-reflect-router-link")).toEqual(
      "/nasa"
    );
    expect(menuItems[7].getAttribute("ng-reflect-router-link")).toEqual(
      "/dashboard/starship"
    );
    expect(menuItems[9].getAttribute("ng-reflect-router-link")).toEqual(
      "/agency"
    );
    expect(menuItems[10].getAttribute("ng-reflect-router-link")).toEqual(
      "/astronaut"
    );
    expect(menuItems[11].getAttribute("ng-reflect-router-link")).toEqual(
      "/location"
    );
    expect(menuItems[12].getAttribute("ng-reflect-router-link")).toEqual(
      "/pad"
    );
    expect(menuItems[13].getAttribute("ng-reflect-router-link")).toEqual(
      "/rocket"
    );
    expect(menuItems[14].getAttribute("ng-reflect-router-link")).toEqual(
      "/spacecraft"
    );
    expect(menuItems[15].getAttribute("ng-reflect-router-link")).toEqual(
      "/spacestation"
    );
    expect(menuItems[18].getAttribute("ng-reflect-router-link")).toEqual(
      "/about"
    );
  });
});
