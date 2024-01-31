import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPrice',
  standalone: true,
})
export class DiscountPricePipe implements PipeTransform {
  transform(originalPrice: number, discountPercentage?: number): string {
    if (discountPercentage && discountPercentage > 0) {
      const discountAmount = (originalPrice * discountPercentage) / 100;
      const discountedPrice = originalPrice - discountAmount;

      // return `Before: ${originalPrice.toFixed(2)} EGP,
      // After: ${discountedPrice.toFixed(2)} EGP`;
      return `${discountedPrice.toFixed(2)} EGP`;
    } else {
      return `$${originalPrice.toFixed(2)}`;
    }
  }
}
