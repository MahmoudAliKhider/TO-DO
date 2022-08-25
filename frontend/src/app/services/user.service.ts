import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import {map}  from "rxjs/operators"
   //import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) 
  { }
  createAccount(user:any){
    return this.http.post("http://localhost:3000/user/register",user)
    // .pipe((
    //   map((res:any)=> res.json)
    //  ))
    
  }
  auth(user:any){
   return this.http.post("http://localhost:3000/user/auth",user)
  //  .pipe((
  //   map((res:any)=> res.json)
  //  ))
  
  }

  saveUserData(token:any,user:any){
  localStorage.setItem("AuthToken",token);
  localStorage.setItem("mean_user",JSON.stringify(user));

  }

  isLoggedIn() :boolean{
   return !!localStorage.getItem("AuthToken")
  }
  logout(){
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("mean_user");

  }
}
