import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaListComponent } from './disciplina-list/disciplina-list.component';

const routes: Routes = [{
  path: '',
  component: DisciplinaListComponent
},
{
  path:'incluir',
  data:{action:'incluir'},
  loadChildren: () =>
    import('./disciplina-form/disciplina-form.module')
  .then(m => m.DisciplinaFormModule)
  },
  {
    path:'listar',
    loadChildren: () =>
      import('./disciplina-list/disciplina-list.module')
    .then(m => m.DisciplinaListModule)
    },
    {
      path:'id/edit',
      data:{action:'incluir'},
      loadChildren: () =>
        import('./disciplina-form/disciplina-form.module')
      .then(m => m.DisciplinaFormModule)
      }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
