import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other.component';
import { MaterialModule } from 'src/app/modules/material.module';


@NgModule({
  declarations: [OtherComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    OtherComponent
  ]
})
export class OtherModule { }
