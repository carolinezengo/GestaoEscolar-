import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoFormRoutingModule } from './aluno-form-routing.module';

import { AlunoFormPrincipalComponent } from './aluno-form-principal/aluno-form-principal.component';
import { FormsModule } from '@angular/forms';
import { AlunoFormDisciplinasComponent } from './aluno-form-disciplinas/aluno-form-disciplinas.component';


@NgModule({
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/modules/cadastros/aluno/aluno-form/aluno-form.module.ts
  declarations: [
    AlunoFormComponent,
   AlunoFormPrincipalComponent,
    AlunoFormDisciplinasComponent


  ],
=======
  declarations: [],
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/modules/cadastros/aluno/aluno-form/aluno-form.module.ts
  imports: [
    CommonModule,
    FormsModule,
    AlunoFormRoutingModule
  ]
})
export class AlunoFormModule { }
