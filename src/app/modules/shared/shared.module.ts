import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  exports: [
    MaterialModule,
    HttpClientModule
    //
    //
    //
  ]
})
export class SharedModule { }
