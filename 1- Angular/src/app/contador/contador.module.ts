import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [contadorComponent],
    imports: [ CommonModule ],
    exports: [contadorComponent],
    providers: [],
    
})
export class ContadorModulo {}
