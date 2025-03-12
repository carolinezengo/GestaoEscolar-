import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



import { FormsModule } from '@angular/forms';
import { Disciplina } from '../../../../core/models/disciplina.model';
import { DisciplinaService } from '../../../../core/services/disciplina.service';



@Component({

  selector: 'app-disciplina-form',
  imports: [FormsModule],
  templateUrl: './disciplina-form.component.html',
  styleUrl: './disciplina-form.component.sass'
})
export class DisciplinaFormComponent implements OnInit {

@Input() model: Disciplina ={alunoDisciplina:[]}
@Output() modelEvent = new EventEmitter<Disciplina>();


incluir:boolean =false;
editar:boolean =false;
mensagem:string = '';
id:number =0;


constructor(private disciplinaService: DisciplinaService,
            private activedRoute: ActivatedRoute,
             private actionRouter: ActivatedRoute,
             private router: Router,
  )
{
 var dataRouting= this.actionRouter.data;
 dataRouting.subscribe((data) => {
   this.incluir = data['action'] == 'incluir';
   this.editar = data['action'] =='editar';
   this.id = Number(this.activedRoute.snapshot.paramMap.get('id'));
 })




 }
  ngOnInit(): void {
    this.model = this.model ?? {};
    this.cmdCarregarDisciplinaPorId(this.id);
  }
load(){
  location.reload();
}

cmdNovo(){
  this.model= this.model ??{alunoDisciplina:[]};
  this.id=0;
  this.incluir=true,
  this.editar=false,
  this.mensagem=''
}

cmdSalvar(){
  this.disciplinaService.post(this.model).subscribe((value:Disciplina) =>{
    this.mensagem ='Salvo com sucesso'
  },
  err =>{
    this.mensagem='Erro ao salvar'
  })
}
cmdEditar(){
  this.disciplinaService.put(this.id, this.model)
  .subscribe((value:Disciplina)=> {
    this.mensagem = 'Salvo com sucesso!'
  },
err => {
  this.mensagem ='Erro ao Salvar'
})
}
cmdCarregarDisciplinaPorId(id: number){
  this.disciplinaService
  .getById(id)
  .subscribe((resultado) => {
    if(!(resultado == null)){
      this.model=resultado
    }}

        );


}
apagarMensagem(){

  this.mensagem='',
  this.load()
}



}
