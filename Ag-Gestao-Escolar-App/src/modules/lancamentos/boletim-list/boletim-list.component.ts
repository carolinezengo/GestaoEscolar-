import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DisciplinaService } from '../../../../core/services/disciplina.service';
import { BoletimService } from '../../../../core/services/boletim.service';
import { AlunoDisciplina } from '../../../../core/models/alunoDisciplina.model';
import { Disciplina } from '../../../../core/models/disciplina.model';
import { Observable } from 'rxjs/internal/Observable';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:false,
  selector: 'app-boletim-list',
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/modules/lancamentos/boletim/boletim-list/boletim-list.component.ts
=======
  imports: [],
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/modules/lancamentos/boletim-list/boletim-list.component.ts
  templateUrl: './boletim-list.component.html',
  styleUrl: './boletim-list.component.sass'
})
export class BoletimListComponent implements OnInit {



  @Input() model: AlunoDisciplina ={};
  @Output() modelEvent = new EventEmitter<AlunoDisciplina>();
   listaDisciplina : Observable<Disciplina[]>;
   alunoDisciplinas: AlunoDisciplina[] = [];
   alunoNota: AlunoDisciplina[] = [];
   mensagem: string='';

   constructor (private disciplinaService: DisciplinaService,
               private boletimService: BoletimService
   )
   {
    this.listaDisciplina = this.disciplinaService.get();
   }

  ngOnInit(): void {
    this.model = this.model ?? {};
  }

  getAlunoDIsciplina(){
    var disciplinaId = Number(this.model.disciplina?.id);
    var result = this.boletimService.getByDisciplina(disciplinaId);
    return result;
   }
   retornarAlunosPorDisciplina(){
    this.getAlunoDIsciplina().subscribe(
     value => this.alunoDisciplinas = value
    )
   }


}
