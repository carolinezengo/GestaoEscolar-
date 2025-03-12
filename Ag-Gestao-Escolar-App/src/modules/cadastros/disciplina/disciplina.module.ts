import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';

import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaListComponent } from './disciplina-list/disciplina-list.component';


@NgModule({
  declarations: [
    DisciplinaListComponent
  ],
  imports: [
    CommonModule,


    DisciplinaRoutingModule
  ]
})
export class DisciplinaModule { }
