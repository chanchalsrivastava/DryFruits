import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HaederComponent } from './haeder/haeder.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

import { ProductComponent } from './product/product.component';

import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProductCategoryDetailsComponent } from './product-category-details/product-category-details.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { OptPageComponent } from './opt-page/opt-page.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AboutComponent } from './about/about.component';
import { AlmondsComponent } from './component/almonds/almonds.component';
import { CashweNutsComponent } from './component/cashwe-nuts/cashwe-nuts.component';
import { CoconutsComponent } from './component/coconuts/coconuts.component';
import { ExotikNutsComponent } from './component/exotik-nuts/exotik-nuts.component';
import { FoxnutsComponent } from './component/foxnuts/foxnuts.component';
import { PistachioComponent } from './component/pistachio/pistachio.component';
import { WalnutsComponent } from './component/walnuts/walnuts.component';
import { NutsComponent } from './nuts/nuts.component';
import { DryFruitsComponent } from './dry-fruits/dry-fruits.component';
import { SpicesComponent } from './spices/spices.component';
import { StuffedComponent } from './stuffed/stuffed.component';
import { SeedsComponent } from './seeds/seeds.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'header',component:HaederComponent},
  {path:'footer',component:FooterComponent},
  {path:'login' , component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'password', component:UpdatePasswordComponent},
  {path:'user', component:UserAccountComponent},
  {path:'add',component:AddToCartComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'product',component:ProductComponent},
  {path:'update',component:UpdateProfileComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact', component:ContactComponent},
  {path:'confirm', component:ConfirmPasswordComponent},
  {path:'opt', component:OptPageComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'product-details', component:ProductCategoryDetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'nuts',component:NutsComponent},
  {path:'dry',component:DryFruitsComponent},
  {path:'spices',component:SpicesComponent},
  {path:'stuffed',component:StuffedComponent},
  {path:'seeds',component:SeedsComponent},
  {path:'slider',component:SliderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
