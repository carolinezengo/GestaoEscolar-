import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmaListComponent } from './turma-list/turma-list.component';

const routes: Routes = [{
  path:'',
  component:TurmaListComponent
},
{
  path:'incluir',
  data: {action:'incluir'},
  loadChildren:()=>
    import('./../turma/turma-form/turma-form.module')
  .then(m => m.TurmaFormModule)
},
{
  path:'listar',
  loadChildren:()=>
    import('./../turma/turma-list/turma-list.module')
  .then(m => m.TurmaListModule)
},
{
  path:':id/editar',
  data: {action:'editar'},
  loadChildren:()=>
    import('./..//turma/turma-form/turma-form.module')
  .then(m => m.TurmaFormModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmaRoutingModule { }
