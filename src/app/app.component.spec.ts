import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { Platform } from "@ionic/angular";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SwUpdate } from "@angular/service-worker";
import { SwUpdateServerMock } from "./swUpdate-server.mock.service";

describe("AppComponent", () => {
  let platformReadySpy;
  let platformSpy;

  beforeEach(() => {
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj("Platform", { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Platform, useValue: platformSpy },
        { provide: SwUpdate, useClass: SwUpdateServerMock },
      ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
  });

  it("should create the app", async () => {
    const fixture = TestBed.createComponent(AppComponent);
    try {
      await fixture.whenStable();
    } catch {
      // Capacitor plugins not available on web
    }
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});