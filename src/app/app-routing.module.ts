import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //
];

@NgModule({
  // configure routes on app
  imports: [RouterModule.forRoot(routes)],
  // export RouterModule
  exports: [RouterModule]
})
export class AppRoutingModule { }
