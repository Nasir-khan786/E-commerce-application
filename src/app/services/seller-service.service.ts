import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginType, SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {

  constructor(private http: HttpClient) { }

  userSignUp(data:SignUp){
    console.warn("service called");
    return this.http.post('http://localhost:3000/seller',data);
  }

  userLogin(data: LoginType){
    console.warn("login service", data);
    let result= this.http.post(`http://localhost:3000/seller/email=${data.email}&password=${data.password}`,data);
  }
}
