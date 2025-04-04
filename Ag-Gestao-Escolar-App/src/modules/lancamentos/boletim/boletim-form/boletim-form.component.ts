import { Component, Input, OnInit } from '@angular/core';
import { AlunoDisciplina } from '../../../../core/models/alunoDisciplina.model';
import { DisciplinaService } from '../../../../core/services/disciplina.service';
import { BoletimService } from '../../../../core/services/boletim.service';
import { Observable } from 'rxjs';
import { Disciplina } from '../../../../core/models/disciplina.model';

@Component({
  selector: 'app-boletim-form',
  standalone: false,

  templateUrl: './boletim-form.component.html',
  styleUrl: './boletim-form.component.sass'
})
export class BoletimFormComponent implements OnInit {
  @Input() model: AlunoDisciplina ={}
 listaDisciplina : Observable<Disciplina[]>;
 alunoDisciplinas: AlunoDisciplina[] = [];
 alunoNotas: AlunoDisciplina[] = [];
 mensagem: string='';

 constructor (private disciplinaService: DisciplinaService,
             private boletimService: BoletimService
 )
 {
  this.listaDisciplina = this.disciplinaService.get();
 }

  ngOnInit(): void {

  }

  getAlunoDIsciplina(){
   var disciplinaId = Number(this.model.disciplina?.id);
   var result = this.boletimService.getByDisciplina(disciplinaId);
   return result;
  }
  retornarAlunosPorDisciplina(){
   this.getAlunoDIsciplina().subscribe(
    value => {
      this.alunoDisciplinas = value
  })
  }
  cmdNovo(){
    this.model ={}
      this.mensagem =''
      this.load();


  }
  load(){
    location.reload();
  }
  salvarNotas(){
  var result : AlunoDisciplina[] =[];
  this.alunoDisciplinas.forEach(
    (Value,i) => {
      result[i] = Value;
      this.alunoNotas=result;
      this.boletimService.setNotas(this.alunoNotas).subscribe(
        (value:AlunoDisciplina[]) =>{


       this.mensagem ='Salvo com sucesso'
       },
       err =>{
         this.mensagem='Erro ao salvar'
      })
    }
  )}

 apagarMensagem(){
  this.mensagem =''
  this.load()
 }



}
