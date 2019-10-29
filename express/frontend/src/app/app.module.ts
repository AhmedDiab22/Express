import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

import { ReactiveFormsModule , FormsModule} from '@angular/forms';

//Material
import { materialModule } from './@material/@material.module';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ColorPickerModule } from 'ngx-color-picker';
import { ImageUploadModule } from 'angular2-image-upload';





import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Routes , RouterModule } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/home/navbar/banner/banner.component';
import { HeaderComponent } from './components/home/navbar/header/header.component';
import { MenueComponent } from './components/home/navbar/menue/menue.component';
import { ImgSlideComponent } from './components/home/img-slide/img-slide.component';
import { CategoryJeansComponent } from './components/home/category-jeans/category-jeans.component';
import { SweatersComponent } from './components/home/sweaters/sweaters.component';
import { LabelsLoveComponent } from './components/home/labels-love/labels-love.component';
import { WomensCategoryComponent } from './components/home/womens-category/womens-category.component';
import { MenCategoryComponent } from './components/home/men-category/men-category.component';
import { WearNowComponent } from './components/home/wear-now/wear-now.component';
import { ExpressLifeComponent } from './components/home/express-life/express-life.component';
import { RecommendedComponent } from './components/home/recommended/recommended.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { CopyComponent } from './components/home/copy/copy.component';
import { FeedBackComponent } from './components/home/feed-back/feed-back.component';
import { WomenSaleComponent } from './components/routes/women-sale/women-sale.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { MensaleComponent } from './components/routes/mensale/mensale.component';
import { LoginComponent } from './components/routes/login/login.component';
import { DetailsComponent } from './components/routes/details/details.component';
import { RegisterComponent } from './components/routes/register/register.component';
import { AccountSettingComponent } from './components/routes/profile/account-setting/account-setting.component';
import { ShippingAddressComponent } from './components/routes/profile/shipping-address/shipping-address.component';
import { SlideUserComponent } from './components/routes/profile/slide-user/slide-user.component';
import { LoginSecurityComponent } from './components/routes/profile/login-security/login-security.component';
import { ProductDetailsComponent } from './components/routes/product-details/product-details.component';
import { BagShopComponent } from './components/routes/bag-shop/bag-shop.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { FullProductDetailsComponent } from './components/routes/full-product-details/full-product-details.component';
import { OtherSayingComponent } from './components/routes/full-product-details/other-saying/other-saying.component';
import { SliderComponent } from './components/routes/full-product-details/slider/slider.component';
import { RelatedComponent } from './components/routes/full-product-details/related/related.component';
import { SideProductDetailsComponent } from './components/routes/full-product-details/side-product-details/side-product-details.component';



// Route for paths and pages
const route: Routes = [  
  { path: '', component: WomenSaleComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'bag', component: BagShopComponent },  
  { path: 'women/sale', component: WomenSaleComponent },
  { path: 'men/sale', component: MensaleComponent },
  { path: 'shipping-address', component: ShippingAddressComponent },
  { path: 'product-details', component: FullProductDetailsComponent },
  
  
  { path: 'login-edit', component: LoginSecurityComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    HeaderComponent,
    MenueComponent,
    ImgSlideComponent,
    CategoryJeansComponent,
    SweatersComponent,
    LabelsLoveComponent,
    WomensCategoryComponent,
    MenCategoryComponent,
    WearNowComponent,
    ExpressLifeComponent,
    RecommendedComponent,
    FooterComponent,
    CopyComponent,
    FeedBackComponent,
    WomenSaleComponent,
    NavbarComponent,
    MensaleComponent,
    LoginComponent,
    DetailsComponent,   
    RegisterComponent, AccountSettingComponent, ShippingAddressComponent, SlideUserComponent, LoginSecurityComponent, ProductDetailsComponent, BagShopComponent, FirstComponent, SecondComponent, FullProductDetailsComponent, OtherSayingComponent, SliderComponent, RelatedComponent, SideProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    materialModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpModule,
    HttpClientModule,
    ImageUploadModule.forRoot(),
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    ColorPickerModule,
    Ng2CarouselamosModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
