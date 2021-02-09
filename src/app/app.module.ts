import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { IndexComponent } from './client/index/index.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './client/home/home.component';
import { FooterComponent } from './client/footer/footer.component';
import { UserHomeComponent } from './client/user-home/user-home.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingsComponent } from './admin/bookings/bookings.component';
import { BusesComponent } from './admin/buses/buses.component';
import { DriversComponent } from './admin/drivers/drivers.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { UpdateBusComponent } from './admin/update-bus/update-bus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusSpecsComponent } from './admin/bus-specs/bus-specs.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { UpdateDriverComponent } from './admin/update-driver/update-driver.component';
import { BookingFormComponent } from './client/booking-form/booking-form.component';
import { BusinfoComponent } from './client/businfo/businfo.component';
import { HistoryComponent } from './client/history/history.component';
import { AddBusComponent } from './admin/add-bus/add-bus.component';
import { AddDriverComponent } from './admin/add-driver/add-driver.component';
import { LandingPageComponent } from './client/landing-page/landing-page.component';
import { AboutNotLoginComponent } from './client/about-not-login/about-not-login.component';
import { StoryComponent } from './client/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    HomeComponent,
    FooterComponent,
    UserHomeComponent,
    AdminloginComponent,
    AdminregisterComponent,
    NavbarComponent,
    BookingsComponent,
    BusesComponent,
    DriversComponent,
    UserProfileComponent,
    UpdateBusComponent,
    BusSpecsComponent,
    UpdateUserComponent,
    UpdateDriverComponent,
    BookingFormComponent,
    BusinfoComponent,
    HistoryComponent,
    AddBusComponent,
    AddDriverComponent,
    LandingPageComponent,
    AboutNotLoginComponent,
    StoryComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
