import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../../../../core/models/aluno.model';
import { AlunoService } from '../../../../core/services/aluno.service';

@Component({
  standalone: false,
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.sass'
})


export class AlunoFormComponent implements OnInit {

@Input() model: Aluno = { alunoDisciplina:[ ] }

mensagem:string = '';
id:number =0;

incluir:boolean =false;
editar:boolean =false;

disabled:boolean = false;
habilitarEdicao:boolean = false;
abaPrincipal:boolean = true;
abaDisciplina: boolean = false;



constructor(private alunoService: AlunoService,
            private activedRoute: ActivatedRoute,
             private actionRouter: ActivatedRoute,
             private router: Router,
  )
{


 var dataRouting= this.actionRouter.data;
 dataRouting.subscribe((data) => {
   this.incluir = data['action'] == 'incluir';
   this.editar = data['action'] =='editar';
   this.habilitarEdicao = this.incluir || this.editar;
   this.id = Number(this.activedRoute.snapshot.paramMap.get('id'));


 })




 }
  ngOnInit(): void {
    this.model = this.model ?? { alunoDisciplinas: [], turma: [] };

    this.cmdCarregarAlunoPorId(this.id);
  }
load(){
  location.reload();
}


habilitaDesabilitaEdicao() {
  this.habilitarEdicao = !this.habilitarEdicao;
}

cmdNovo(){
  this.model= this.model ??{ alunoDisciplinas : []};
  this.id=0;
  this.incluir=true,
  this.editar=false,
  this.mensagem=''
}

cmdSalvar(){

  this.alunoService.post(this.model).subscribe
  ((value: Aluno) =>{

  this.mensagem ='Salvo com sucesso'
  },
  err =>{
    this.mensagem='Erro ao salvar'
  })
  this.disabled = false
}
cmdEditar(){

  this.alunoService.put(this.id, this.model)
  .subscribe((value: Aluno)=> {

    this.mensagem = 'Salvo com sucesso!'
  },
err => {
  this.mensagem ='Erro ao Salvar'
})
}
cmdCarregarAlunoPorId(id: number){
  this.alunoService
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




  alternarAba(){
    this.abaPrincipal =!this.abaPrincipal
    this.abaDisciplina= !this.abaDisciplina
  }






}
