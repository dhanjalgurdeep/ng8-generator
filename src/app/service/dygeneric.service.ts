
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DygenericService {
  private dyUrl = '../../assets/json/mock.json';
  constructor (private http: HttpClient) {}

  getGenericService() : Observable<any> {
    // return this.http.get(this.dyUrl).map(res => res.json()).catch((error:any) => Observable.throw(error.json.error || 'Server error'));
    return this.http.get(this.dyUrl);
  }

  getTemplateData(url): Observable<any> {
    return this.http.get(url);
  }
}
