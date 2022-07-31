import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [AppComponent, LoginComponent, PortfolioComponent],    
  imports:[CommonModule,BrowserModule, CoreModule, MainModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],  
})
export class AppModule {}
