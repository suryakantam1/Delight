import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'', component: MenuComponent},
  {path:'cart', component: CartComponent},
  {path:'checkout', component: CheckOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
