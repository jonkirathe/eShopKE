import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs'
import {Product} from "../models/product";

@Injectable({providedIn: 'root'})
export class ApiService {

  url = 'http://localhost:3000';

  constructor( private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<Product[]>(this.url + '/products');
  }
}
