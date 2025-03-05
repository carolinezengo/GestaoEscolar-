import { NgModule } from '@angular/core';
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/modules/cadastros/disciplina/disciplina-list/disciplina-list.module.ts
import { CommonModule, NgFor, NgIf, AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DisciplinaListRoutingModule } from './disciplina-list-routing.module';
import { DisciplinaListComponent } from './disciplina-list.component';
=======
import { CommonModule } from '@angular/common';

import { DisciplinaListRoutingModule } from './disciplina-list-routing.module';
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/modules/cadastros/disciplina/disciplina-list/disciplina-list.module.ts


@NgModule({
  declarations: [DisciplinaListComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/modules/cadastros/disciplina/disciplina-list/disciplina-list.module.ts
    FormsModule,
    NgIf,
    NgFor,
    AsyncPipe,
    DatePipe,

=======
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/modules/cadastros/disciplina/disciplina-list/disciplina-list.module.ts
    DisciplinaListRoutingModule
  ]
})
export class DisciplinaListModule { }
