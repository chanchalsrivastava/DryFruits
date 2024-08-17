import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HaederComponent } from './haeder/haeder.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';


import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAccountComponent } from './user-account/user-account.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { ProductCategoryDetailsComponent } from './product-category-details/product-category-details.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { OptPageComponent } from './opt-page/opt-page.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AboutComponent } from './about/about.component';
import { AlmondsComponent } from './component/almonds/almonds.component';
import { MamaerAlmondsComponent } from './component/mamaer-almonds/mamaer-almonds.component';
import { CashweNutsComponent } from './component/cashwe-nuts/cashwe-nuts.component';
import { PistachioComponent } from './component/pistachio/pistachio.component';
import { WalnutsComponent } from './component/walnuts/walnuts.component';
import { FoxnutsComponent } from './component/foxnuts/foxnuts.component';
import { ExotikNutsComponent } from './component/exotik-nuts/exotik-nuts.component';
import { CoconutsComponent } from './component/coconuts/coconuts.component';
import { NutsComponent } from './nuts/nuts.component';
import { DryFruitsComponent } from './dry-fruits/dry-fruits.component';
import { SpicesComponent } from './spices/spices.component';
import { SeedsComponent } from './seeds/seeds.component';
import { StuffedComponent } from './stuffed/stuffed.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HaederComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    AddToCartComponent,
   
    
    BlogComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    UserAccountComponent,
    UpdatePasswordComponent,
    ForgotPasswordComponent,
    ProductCategoryDetailsComponent,
    UpdateProfileComponent,
    OptPageComponent,
    SliderComponent,
    ConfirmPasswordComponent,
    WishlistComponent,
    AboutComponent,
    AlmondsComponent,
    MamaerAlmondsComponent,
    CashweNutsComponent,
    PistachioComponent,
    WalnutsComponent,
    FoxnutsComponent,
    ExotikNutsComponent,
    CoconutsComponent,
    NutsComponent,
    DryFruitsComponent,
    SpicesComponent,
    SeedsComponent,
    StuffedComponent,
    SliderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
