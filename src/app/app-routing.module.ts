import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OtherComponent } from './modules/other/other.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Routes => alias Route[]
const routes: Routes = [
  { path: 'other', component: OtherComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  // configure routes on app
  imports: [RouterModule.forRoot(routes)],
  // export RouterModule
  exports: [RouterModule]
})
export class AppRoutingModule { }
