import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RedirectGuard } from './core/services/route-service/route.service';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'home',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: environment.home_url
    }
  },
  {
    path: 'dashboard',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: environment.dashboard_url
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
