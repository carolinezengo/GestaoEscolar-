import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletimFormComponent } from './boletim-form/boletim-form.component';

const routes: Routes = [{
  path:'',
  loadChildren:() =>
    import('./boletim-form/boletim-form.module').then
  (m => m.BoletimFormModule)
},{
  path:'listar',
  loadChildren:() =>
    import('./boletim-list/boletim-list.module').then
  (m => m.BoletimListModule)

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletimRoutingModule { }
