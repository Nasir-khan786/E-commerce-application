import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{

  productList:undefined | product[];
  productMessage:undefined | string 
  constructor(private productService: ProductService){}
  ngOnInit(): void {
   this.getAllProductList()
  }

  deleteProduct(id:number){
    console.warn("test id",id);
    this.productService.deleteProduct(id).subscribe((result)=>{
      if(result){
          this.productMessage="Product is deleted";
          this.getAllProductList();
      }
    })
    setTimeout(()=>{
      this.productMessage=undefined
    },3000)
  }
  getAllProductList(){
    this.productService.productList().subscribe((result)=>{
      console.warn(result);
      this.productList=result;
    })
  }
}
