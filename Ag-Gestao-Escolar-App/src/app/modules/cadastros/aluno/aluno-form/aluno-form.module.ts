import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoFormRoutingModule } from './aluno-form-routing.module';
import { AlunoFormComponent } from './aluno-form.component';


@NgModule({
  declarations: [
    AlunoFormComponent
  ],
  imports: [
    CommonModule,
    AlunoFormRoutingModule
  ]
})
export class AlunoFormModule { }
