import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';


//primeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ProgressSpinnerModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
