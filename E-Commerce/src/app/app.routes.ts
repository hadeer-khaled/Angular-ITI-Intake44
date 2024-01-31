import { Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
    title: 'Products Page',
  },
  {
    path: 'log-in',
    component: LoginPageComponent,
    title: 'Log-in Page',
  },
  {
    path: 'cart',
    component: CartPageComponent,
    title: 'cart Page',
  },
  {
    path: 'sign-up',
    component: SignupPageComponent,
    title: 'Sign-up Page',
  },
  {
    path: 'product-details/:productId',
    component: ProductDetailsPageComponent,
    title: 'Product Details Page',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
