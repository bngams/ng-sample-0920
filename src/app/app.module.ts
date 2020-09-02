import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherModule } from './other/other.module';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OtherModule
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
