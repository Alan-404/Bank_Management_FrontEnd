import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/layout/home/home.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/home/effects/spinner/spinner.component';
import { HeaderComponent } from './components/home/layout/header/header.component';
import { DashboardComponent } from './components/home/view/dashboard/dashboard.component';
import { MyInforComponent } from './components/home/view/my-infor/my-infor.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent, children: [
    {path: 'login', component: LoginComponent}
  ]},
  {path: 'home', component: HomeComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'my-information', component: MyInforComponent}
  ]},
  {path:'', redirectTo: 'home/dashboard', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AuthComponent,
    SpinnerComponent,
    HeaderComponent,
    DashboardComponent,
    MyInforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
