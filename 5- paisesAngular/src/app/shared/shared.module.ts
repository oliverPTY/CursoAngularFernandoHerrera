import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { appRouterModule } from '../app.router.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
   SidebarComponent
  ],
  imports: [
    CommonModule,
    appRouterModule
  ]
})
export class SharedModule { }
