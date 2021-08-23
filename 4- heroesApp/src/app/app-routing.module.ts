import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';
import { HeroesModule } from './heroes/heroes.module';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>import('./auth/auth.module').then(m => AuthModule)
  },
  {
    path:'heroes',
    loadChildren: () =>import('./heroes/heroes.module').then(m => HeroesModule), 
    canLoad: [AuthGuard] ,
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
   // component: ErrorPageComponent
   redirectTo: '404'
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
