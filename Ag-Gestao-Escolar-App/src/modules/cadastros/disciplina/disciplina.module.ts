import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaFormComponent } from './disciplina-form/disciplina-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DisciplinaFormComponent],
  imports: [
    CommonModule,
    NgIf,
   FormsModule,
    DisciplinaRoutingModule
  ]
})
export class DisciplinaModule { }
