import { Component, Input } from '@angular/core';
// import { Product } from '../interface/product';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { DiscountPricePipe } from '../discount-price.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, NgFor, DiscountPricePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productItem: any;
  constructor(private router: Router) {}

  // roundedNumber: number = Math.round(this.productItem.rating);
  // loopArray = new Array(5).fill(0).map((_, index) => index);
  showProductDetails(productId: number) {
    this.router.navigate(['product-details', productId]);
  }
}
