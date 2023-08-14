import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SlidesComponent } from './components/slides/slides.component';
import { SharedModule } from './components/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RedirectGuard } from './core/services/route-service/route.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SlidesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [RedirectGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
