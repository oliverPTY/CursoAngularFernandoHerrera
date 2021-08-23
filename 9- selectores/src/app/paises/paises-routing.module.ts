import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectorpageComponent } from './pages/selectorpage/selectorpage.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'selectores', component: SelectorpageComponent},
      {path: '**', redirectTo:'selectores'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
