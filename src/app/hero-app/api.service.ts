import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hero} from './hero';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

  private createHeader(headers: HttpHeaders) {
    headers = headers || new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }

  get(url: string, params?): Observable<any> {
    let headers = new HttpHeaders();
    headers = this.createHeader(headers);
    return this.http.get<any>(url, {headers, params});
  }

  post(url: string, params?): Observable<any> {
    let headers = new HttpHeaders();
    headers = this.createHeader(headers);
    return this.http.post(url, {headers, params});
  }

  put(url: string, params?) {
    let headers = new HttpHeaders();
    headers = this.createHeader(headers);
    return this.http.put(url, {headers, params});
  }

  delete(url: string, params?) {
    let headers = new HttpHeaders();
    headers = this.createHeader(headers);
    return this.http.delete(url, {headers, params});
  }

}
