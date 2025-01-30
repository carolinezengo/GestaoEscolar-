import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DisciplinaListRoutingModule } from './disciplina-list-routing.module';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    NgFor,
    AsyncPipe,

    DisciplinaListRoutingModule
  ]
})
export class DisciplinaListModule { }
