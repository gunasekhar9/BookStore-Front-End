import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  HttpService: any;

  constructor(private httpService:HttpServiceService) { 
    this.token= localStorage.getItem("token")
  }
  login(data:any)
{
  let headersObject= {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  }
 console.log("login called in service user")
 return this.httpService.postService('/User/LogInUser/userLogin',data,false,headersObject)
}
forgotpassword(data:any)
{
  let headersObject={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }) 
  }
  console.log("Forgot called")
  return this.httpService.postService('/user/reset',data,false,headersObject)
}
}
