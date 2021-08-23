import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './pais/page/region/region.component';
import { CapitalComponent } from './pais/page/capital/capital.component';
import { VerPaisComponent } from './pais/page/ver-pais/ver-pais.component';
import { PaisComponent } from './pais/page/pais/pais.component';



const routes: Routes = [
    {
        path: '',
        component: PaisComponent,
        pathMatch: 'full'
    },
    {
        path:'region',
        component: RegionComponent,
    },
    {
       path:'capital',
       component: CapitalComponent,
    },
    {
        path:'pais/:id',
        component: VerPaisComponent,
    },
    {
        path:'**',
        redirectTo:'',
    }
    
] 


@NgModule({
    declarations: [],
    imports: [ 
        RouterModule.forRoot(routes)
     ],
    exports: [

        RouterModule
    ],
    providers: [],
})
export class appRouterModule {}