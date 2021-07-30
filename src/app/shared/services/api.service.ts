import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ext = '.json';
  baseUrl = 'http://ergast.com/api/f1/';

  constructor(private http: HttpClient) { }

  public get<T>(url: string, options?: any) { 
    return this.http.get<T>(this.baseUrl + url + this.ext, options); 
  } 

  public post<T>(url: string, data: any, options?: any) { 
    return this.http.post<T>(this.baseUrl + url + this.ext, data, options); 
  } 

  public put<T>(url: string, data: any, options?: any) { 
    return this.http.put<T>(this.baseUrl + url + this.ext, data, options); 
  } 

  public delete<T>(url: string, options?: any) { 
    return this.http.delete<T>(this.baseUrl + url + this.ext, options); 
  } 

}
