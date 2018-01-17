import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AgmCoreModule} from '@agm/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {TopListComponent} from './accommodations/top-list/top-list.component';
import {TopDetailComponent} from './accommodations/top-list/top-detail/top-detail.component';
import {AccommodationService} from './accommodations/shared/accommodation.service';
import {AddressComponent} from './accommodations/sections/address/address.component';
import {RatingComponent} from './accommodations/sections/rating/rating.component';
import {PriceComponent} from './accommodations/sections/price/price.component';
import {MapListComponent} from './accommodations/map-list/map-list.component';
import {MapDetailComponent} from './accommodations/map-list/map-detail/map-detail.component';
import {FooterComponent} from './footer/footer.component';
import {HowtoListComponent} from './howto-list/howto-list.component';
import {NewsletterComponent} from './newsletter/newsletter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewsletterService} from './newsletter/newsletter.service';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth/auth.service';
import {AccountComponent} from './account/account.component';
import {AccountService} from './account/account.service';
import {ReviewListComponent} from './review-list/review-list.component';
import {ReviewDetailComponent} from './review-list/review-detail/review-detail.component';
import {ReviewFormComponent} from './review-form/review-form.component';
import {GooglePlacesAutocompleteDirective} from './google-places-autocomplete/google-places-autocomplete.directive';

const BRUSHIP_ROUTES: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'account', component: AccountComponent },
  { path: '**', component: MainPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    ContactUsComponent,
    TopListComponent,
    TopDetailComponent,
    AddressComponent,
    RatingComponent,
    PriceComponent,
    MapListComponent,
    MapDetailComponent,
    FooterComponent,
    HowtoListComponent,
    NewsletterComponent,
    LoginComponent,
    AccountComponent,
    ReviewListComponent,
    ReviewDetailComponent,
    ReviewFormComponent,
    GooglePlacesAutocompleteDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(BRUSHIP_ROUTES),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBEqwaI0P1yyWmIZ7a4vUPljajobeGc8z8',
      libraries: ['places', 'geometry']
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AccommodationService, NewsletterService, AuthService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
