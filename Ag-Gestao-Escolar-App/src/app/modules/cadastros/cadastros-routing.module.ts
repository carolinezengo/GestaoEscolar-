import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaModule } from './disciplina/disciplina.module';

const routes: Routes = [{
  path:'disciplina',
  loadChildren:() =>
    import('./disciplina/disciplina.module')
        .then(m => m.DisciplinaModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
