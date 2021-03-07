import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Third-party imports */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

/** Routing, Shared and Widget Modules */
import { AppRoutingModule } from './app-routing.module';

/** Module Components/Directives/Pipes/Services */
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
