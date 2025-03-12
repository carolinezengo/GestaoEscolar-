import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmaListComponent } from './turma-list.component';

const routes: Routes = [{
  path:'',
  component:TurmaListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmaListRoutingModule { }
