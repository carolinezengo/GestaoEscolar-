import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaModule } from './disciplina/disciplina.module';

const routes: Routes = [{
  path:'disciplina',
  loadChildren:() =>
    import('./disciplina/disciplina.module')
        .then(m => m.DisciplinaModule)
},
{
  path:'aluno',
  loadChildren:() =>
    import('./aluno/aluno.module')
        .then(m => m.AlunoModule)
},
{
  path:'turma',
  loadChildren:() =>
    import('./turma/turma.module')
        .then(m => m.TurmaModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
