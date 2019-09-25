import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


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
    headers = headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    return headers;
  }

  get(url: string, params?): Observable<any> {
    let headers = new HttpHeaders();
    headers = this.createHeader(headers);
    return this.http.get<any>(url, {headers, params});
  }

  post(url: string, data, params?): Observable<any> {
    let headers = new HttpHeaders();
    headers = this.createHeader(headers);
    return this.http.post(url, data, {headers});
  }

  put(url: string, data, params?) {
    let headers = new HttpHeaders();
    headers = this.createHeader(headers);
    return this.http.put(url, data, { headers });
  }

  delete(url: string, params?) {
    let headers = new HttpHeaders();
    headers = this.createHeader(headers);
    return this.http.delete(url, {headers, params});
  }

}
