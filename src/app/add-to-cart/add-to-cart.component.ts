import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  // quantity: number = 1;
  // weight: number = 1;
  // basePrice: number = 10; 
  // price: number = this.basePrice;
  // productquality:number=1;
  // public productList:any;
  //  item:any;
  selectedProduct: string = '';
  quantity: number = 0;
  weight: number = 0;
  totalPrice: number | null = null;
   constructor(private router:Router,private cart:CartService){}
  ngOnInit(): void {
  }
  
  //   const plus = document.querySelector(".plus") as HTMLButtonElement;
  //   const minus = document.querySelector(".minus") as HTMLButtonElement;
  //   const num = document.querySelector(".num") as HTMLElement;
    
  //   let a: number = 1;
    
  //   plus.addEventListener("click", () => {
  //       a++;
  //       a = (a < 10) ? Number("0" + a) : a;
  //       num.innerText = a.toString();
  //   });
    
  //   minus.addEventListener("click", () => {
  //       if (a > 1) {
  //           a--;
  //           a = (a < 10) ? Number("0" + a) : a;
  //           num.innerText = a.toString();
  //       }
  //   });
    
 
  // } 
  // updatePrice() {
    
  //   this.price = this.basePrice * this.quantity * this.weight;
  // } 
  

  calculatePrice(): void {
    // You can customize this logic based on your pricing strategy
    const basePrice = this.quantity * this.weight * 10; // Example base price calculation
    const increasePercentage = 0.1; // 10% increase
    this.totalPrice = basePrice * (1 + increasePercentage);
  }

  }





