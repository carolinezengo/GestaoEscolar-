import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoFormRoutingModule } from './aluno-form-routing.module';
import { AlunoFormComponent } from './aluno-form.component';
import { FormsModule } from '@angular/forms';
import { AlunoFormDisciplinasComponent } from './aluno-form-disciplinas/aluno-form-disciplinas.component';
import { AlunoFormPrincipalComponent } from './aluno-form-principal/aluno-form-principal.component';


@NgModule({
  declarations: [
AlunoFormComponent,
AlunoFormDisciplinasComponent,
AlunoFormPrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlunoFormRoutingModule
  ]
})
export class AlunoFormModule { }
