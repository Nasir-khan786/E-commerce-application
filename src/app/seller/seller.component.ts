import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginType, SignUp } from '../data-type';
import { SellerServiceService } from '../services/seller-service.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  show=false;
  constructor(private sellerService: SellerServiceService,
    private router: Router){}
  ngOnInit(): void {
      
  }

  signUp(data:SignUp):void{
    this.sellerService.userSignUp(data).subscribe((result) => {
      if(result){
        this.router.navigate(['seller-home']);
      }
    });
  }

  login(data:LoginType):void{
  console.warn("Login form")
  this.sellerService.userLogin(data);
  this.router.navigate(['seller-home']);
  }



  openToLogin(){
   this.show=true;
  }
  openToSignUp(){
   this.show=false;
  }
}
