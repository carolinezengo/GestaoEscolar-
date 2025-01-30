import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmaFormRoutingModule } from './turma-form-routing.module';
import { TurmaFormComponent } from './turma-form.component';


@NgModule({
  declarations: [
    TurmaFormComponent
  ],
  imports: [
    CommonModule,
    TurmaFormRoutingModule
  ]
})
export class TurmaFormModule { }
