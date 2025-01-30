import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoFormPrincipalComponent } from './aluno-form-principal/aluno-form-principal.component';


@NgModule({
  declarations: [
    AlunoFormPrincipalComponent
  ],
  imports: [
    CommonModule,
    AlunoRoutingModule
  ]
})
export class AlunoModule { }
