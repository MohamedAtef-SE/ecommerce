import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { logedGuard } from './core/guards/loged/loged.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

export const routes: Routes = [
    {path: '',redirectTo: '',pathMatch:'full'},
    {path:'',component: BlankLayoutComponent,canActivate: [authGuard],
        children:[
        {path: '',redirectTo: 'home',pathMatch:'full'},
        {path: 'home',component: HomeComponent},
        {path: 'details/:id', loadComponent: ()=> import('./components/product-details/product-details.component').then(c => c.ProductDetailsComponent)},
        {path:'products',component: ProductComponent},
        {path: 'cart',loadComponent: ()=> import('./components/cart/cart.component').then(c => c.CartComponent)},
        {path: 'wishlist',loadComponent: ()=> import('./components/wishlist/wishlist.component').then(c => c.WishlistComponent)},
        {path: 'brands', loadComponent: ()=> import('./components/brands/brands.component').then( c=>  c.BrandsComponent)},
        {path: 'categories',loadComponent: ()=> import('./components/categories/categories.component').then(c => c.CategoriesComponent)},
        {path: 'allorders',loadComponent: ()=> import('./components/orders/orders.component').then(c => c.OrdersComponent)},
        {path: 'checkout/:cartId',loadComponent: ()=> import('./components/checkout/checkout.component').then(c => c.CheckoutComponent)}
    ]},
    {path:'',component:AuthLayoutComponent,canActivate: [logedGuard],
        children:[
        {path: '',redirectTo: 'login',pathMatch: 'full'},
        {path: 'login',component: LoginComponent},
        {path: 'register',loadComponent: ()=> import('./components/register/register.component').then(c => c.RegisterComponent)},
        {path: 'forgetpassword',loadComponent: ()=> import('./components/forget-password/forget-password.component').then(c => c.ForgetPasswordComponent)}
    ]},
    {path: '**',loadComponent: ()=> import('./components/notfound/notfound.component').then(c=>c.NotfoundComponent) }
];


export const appRoutes: Routes = [
    {path: '',redirectTo: '',pathMatch:'full'},
    {path:'',component: BlankLayoutComponent,canActivate: [authGuard],
        children:[
        {path: '',redirectTo: 'home',pathMatch:'full'},
        {path: 'home',component: HomeComponent},
        {path: 'details/:id', loadComponent: ()=> import('./components/product-details/product-details.component').then(c => c.ProductDetailsComponent)},
        {path:'products',component: ProductComponent},
        {path: 'cart',loadComponent: ()=> import('./components/cart/cart.component').then(c => c.CartComponent)},
        {path: 'wishlist',loadComponent: ()=> import('./components/wishlist/wishlist.component').then(c => c.WishlistComponent)},
        {path: 'brands', loadComponent: ()=> import('./components/brands/brands.component').then( c=>  c.BrandsComponent)},
        {path: 'categories',loadComponent: ()=> import('./components/categories/categories.component').then(c => c.CategoriesComponent)},
        {path: 'allorders',loadComponent: ()=> import('./components/orders/orders.component').then(c => c.OrdersComponent)},
        {path: 'checkout/:cartId',loadComponent: ()=> import('./components/checkout/checkout.component').then(c => c.CheckoutComponent)}
    ]},
    {path:'',component:AuthLayoutComponent,canActivate: [logedGuard],
        children:[
        {path: '',redirectTo: 'login',pathMatch: 'full'},
        {path: 'login',component: LoginComponent},
        {path: 'register',loadComponent: ()=> import('./components/register/register.component').then(c => c.RegisterComponent)},
        {path: 'forgetpassword',loadComponent: ()=> import('./components/forget-password/forget-password.component').then(c => c.ForgetPasswordComponent)}
    ]},
    {path: '**',loadComponent: ()=> import('./components/notfound/notfound.component').then(c=>c.NotfoundComponent) }
];
