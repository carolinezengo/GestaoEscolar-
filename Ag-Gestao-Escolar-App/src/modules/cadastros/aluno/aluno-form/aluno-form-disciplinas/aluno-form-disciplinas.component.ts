import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Aluno } from '../../../../../core/models/aluno.model';
import { Observable } from 'rxjs';
import { Disciplina } from '../../../../../core/models/disciplina.model';
import { DisciplinaService } from '../../../../../core/services/disciplina.service';
import { AlunoDisciplina } from '../../../../../core/models/alunoDisciplina.model';

@Component({
  selector: 'app-aluno-form-disciplinas',
  standalone: false,

  templateUrl: './aluno-form-disciplinas.component.html',
  styleUrl: './aluno-form-disciplinas.component.sass'
})
export class AlunoFormDisciplinasComponent implements OnInit{


    @Input() model: Aluno = { alunoDisciplina: []}
    @Output() modelEvent = new EventEmitter<Aluno>();
    @Input() disabled: boolean = false;

    listaDisciplina: Observable<Disciplina[]>;
    disciplina : Disciplina = {};

    constructor(private disciplinaService: DisciplinaService
     ){
       this.listaDisciplina = this.disciplinaService.get()
    }




  get alunoDisciplinas() : AlunoDisciplina[] {
    return this.model.alunoDisciplina ?? [];

  }

  cmdAdicionar() {
    var alunoDisciplinas = {
      disciplina: this.disciplina,


    }
   // console.log(alunoDisciplina);
    this.model.alunoDisciplina?.push(alunoDisciplinas)



    }


  cmdRemover(item: Disciplina) {
    var pos
    pos = this.alunoDisciplinas.indexOf(item)
    this.model?.alunoDisciplina?.splice(pos,1)
   this.load();
  }
  load(){
    location.reload()
  }



  ngOnInit(): void {

  }

}
