import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerComponent } from './seller/seller.component';
import { sellerAuthGuard } from './seller-auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';

const routes: Routes = [{
path: '', component:HomeComponent
},
{
  path: 'seller', component:SellerComponent
},
{
  path: 'seller-home', component:SellerHomeComponent, canActivate:[sellerAuthGuard]
},
{
  path:'seller-add-product', component:SellerAddProductComponent, canActivate:[sellerAuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
