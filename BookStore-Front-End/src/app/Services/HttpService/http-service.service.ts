import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  BaseUrl = environment.BaseUrl;
  token:any; 

  constructor(private http:HttpClient) { }
  postService(url:string ,reqData:any, token: boolean=false, httpOptions: any={})
  { 
    return this.http.post(this.BaseUrl + url, reqData, token && httpOptions);
  }
}
