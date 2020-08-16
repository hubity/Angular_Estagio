import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './views/login/login.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { RegisterComponent } from './views/login/register/register.component';
import {UserServiceService} from './views/user-service.service';
import { AuthService } from './views/login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  providers: [UserServiceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
