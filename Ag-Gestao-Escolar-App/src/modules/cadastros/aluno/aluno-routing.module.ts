import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoListComponent } from './aluno-list/aluno-list.component';

const routes: Routes = [{  path: '',
  component: AlunoListComponent
},
{
path:'incluir',
data:{action: 'incluir'},
loadChildren:() =>
  import('./aluno-form/aluno-form.module')
 .then(m => m.AlunoFormModule)
},
{
path:'listar',
loadChildren:() =>
  import('./aluno-list/aluno-list.module')
 .then(m => m.AlunoListModule)

},
{
path: ':id',
loadChildren: () =>
  import('./aluno-form/aluno-form.module')
 .then(m => m.AlunoFormModule)
},
{
path: ':id/editar',
data: {action: 'editar'},
loadChildren:() =>
  import('./aluno-form/aluno-form.module')
 .then(m => m.AlunoFormModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
