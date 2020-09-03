import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  exports: [
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
