import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';

import { TurmaListRoutingModule } from './turma-list-routing.module';
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/modules/cadastros/turma/turma-list/turma-list.module.ts
import { TurmaListComponent } from './turma-list.component';
import { FormsModule } from '@angular/forms';
=======
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/modules/cadastros/turma/turma-list/turma-list.module.ts


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    NgIf,
    NgFor,
    AsyncPipe,
    DatePipe,
    TurmaListRoutingModule
  ]
})
export class TurmaListModule { }
