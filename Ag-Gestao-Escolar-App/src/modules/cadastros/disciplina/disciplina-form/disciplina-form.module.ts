import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { DisciplinaFormRoutingModule } from './disciplina-form-routing.module';




@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    NgIf,

    DisciplinaFormRoutingModule
  ]
})
export class DisciplinaFormModule { }
