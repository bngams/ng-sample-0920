import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OtherComponent } from './modules/other/other.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BasicSyntaxComponent } from './components/basic-syntax/basic-syntax.component';
import { DomainGuard } from './guards/domain.guard';

// Routes => alias Route[]
const routes: Routes = [
  { path: 'other', component: OtherComponent },
  { path: 'basic-syntax', component: BasicSyntaxComponent },
  // domain/first, domain/second
  { path: 'domain', canLoad: [DomainGuard], loadChildren: () => import('./modules/domain/domain.module').then(m => m.DomainModule) },
  { path: '', redirectTo: '/basic-syntax', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  // configure routes on app
  imports: [RouterModule.forRoot(routes)],
  // export RouterModule
  exports: [RouterModule]
})
export class AppRoutingModule { }
