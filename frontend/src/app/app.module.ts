import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlashMessageModule } from 'jjwins-angular-12-flash-message';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user.service';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './guards/auth.guard';
const AppRoutes :Routes=[
  {path:"",component:HomeComponent},
  {path:"main",component:MainComponent,canActivate:[AuthGuard]},

  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    FlashMessageModule
  
    
  ],
  providers: [
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
