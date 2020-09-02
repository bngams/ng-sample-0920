import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { OtherModule } from './modules/other/other.module';
import { MaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// JS module => reference file
// import { NgModule } from '@angular/core';

// AngularModule => Load features
// @NgModule
// declarations => declare components (define markup etc.), directives, pipes
// boostrap => components available at launch
// providers => DI - Module Context
// imports => load other modules, imports features from modules
// exports => can use outside
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    OtherModule,
  ],
  exports: [
    // AppComponent, AppRoutingModule
  ],
  providers: [
    // MyCustomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
