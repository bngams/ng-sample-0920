import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  exports: [
    MaterialModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SharedModule { }
