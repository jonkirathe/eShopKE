import {HttpClient, HttpResponse} from "@angular/common/http";
import {ApiService} from "./api.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from "@angular/core/testing";

describe('Api Service', () => {
  let apiService: ApiService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
      declarations: []
    });
    apiService = TestBed.inject(ApiService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify()
  })

  it('should create', () => {
    expect(apiService).toBeDefined();
  });

});
