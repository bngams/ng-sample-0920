import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { QuicklinkStrategy, QuicklinkModule } from 'ngx-quicklink';
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
  {
    path: 'domain',
    data: { preload: true },
    canLoad: [DomainGuard], loadChildren: () => import('./modules/domain/domain.module').then(m => m.DomainModule)
  },
  {
    path: 'products', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  },
  { path: '', redirectTo: '/basic-syntax', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  // configure routes on app
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })
  ],
  // export RouterModule
  exports: [RouterModule, QuicklinkModule]
})
export class AppRoutingModule { }
