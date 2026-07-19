import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TwitterService } from "./twitter.service";

describe("TwitterService", () => {
  let service: TwitterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TwitterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("extractTwitterContent should fetch and return embedded html", async () => {
    const twitterUrl = "https://twitter.com/SpaceX/status/123456";
    const promise = service.extractTwitterContent(twitterUrl);
    const req = httpMock.expectOne((r) =>
      r.url.startsWith("https://cors.th105.de/"),
    );
    expect(req.request.method).toBe("GET");
    expect(req.request.url).toContain(
      "https://publish.twitter.com/oembed?url=" + twitterUrl,
    );
    req.flush({ html: '<blockquote class="twitter-tweet">Tweet</blockquote>' });
    const result = await promise;
    expect(result).toBe('<blockquote class="twitter-tweet">Tweet</blockquote>');
  });
});
