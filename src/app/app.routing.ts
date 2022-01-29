import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes =[
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',component:HomeComponent
  },
  {
    path: 'user-profile',
    loadChildren:
      './profile/profile.module#ProfileModule',
  },
  {
    path: 'register',
    loadChildren:
      './signup/signup.module#SignupModule',
  },
  {
    path: 'login',
    loadChildren:
      './login/login.module#LoginModule',
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
