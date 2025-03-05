import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { TurmaRoutingModule } from './turma-routing.module';
import { TurmaFormComponent } from './turma-form/turma-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TurmaFormComponent
  ],
  imports: [
    CommonModule,
     NgIf,
     FormsModule,
    TurmaRoutingModule
  ]
})
export class TurmaModule { }
