import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

import { Router } from '@angular/router';
import { CartService } from '../shared/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
 public productList:any;
  
 quantity: number = 14;
 baseAmount: number = 100;
  selectedWeight: number = 1;
  selectedQuantity: number = 1;
  totalAmount: number = this.calculateTotal();
  constructor(private router:Router , private cart:CartService,private cdr: ChangeDetectorRef){}
 
  ngOnInit(): void {
  }  
  addTocart(item:any)
  {
   this.cart.addtocart(item);
  }

calculateTotal(): number  {
 return this.totalAmount = this.baseAmount * this.selectedWeight * this.selectedQuantity;
}
decrementQuantity(): void {
  if (this.quantity > 1) {
    this.quantity--;
  }
}

incrementQuantity(): void {

  this.quantity++;
}







}
