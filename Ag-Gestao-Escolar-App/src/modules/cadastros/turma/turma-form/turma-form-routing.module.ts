import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmaFormComponent } from './turma-form.component';

const routes: Routes = [{
  path:'',
  component:TurmaFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmaFormRoutingModule { }
