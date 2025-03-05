import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Turma } from '../../../../core/models/turma.model';
import { TurmaService } from '../../../../core/services/turma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-turma-form',
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/modules/cadastros/turma/turma-form/turma-form.component.ts
  standalone: false,


=======
  imports: [],
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/modules/cadastro/turma/turma-form/turma-form.component.ts
  templateUrl: './turma-form.component.html',
  styleUrl: './turma-form.component.sass'
})
export class TurmaFormComponent  implements OnInit{

  @Input() model:Turma={}
  @Output() modelEvent = new EventEmitter<Turma>();



 inclui:boolean= false;
 editar:boolean=false;
 mensagem:string='';
 id:number=0;

 constructor(private turmaService: TurmaService, private activedRoute: ActivatedRoute,
  private actionRouter: ActivatedRoute,private router: Router
 ){
  var dataRouting = this.actionRouter.data;
  dataRouting.subscribe(data =>{
    this.inclui=data['action'] == 'incluir';
    this.editar=data['action'] == 'editar';
    this.id = Number(this.activedRoute.snapshot.paramMap.get('id'));
  })

 }



  ngOnInit(): void {
   this.model = this.model ?? {};
   this.cmdCarregarTurmaPorID(this.id);
  }
  load(){
    location.reload();
  }

  cmdNovo(){

    this.model = this.model ?? {}
    this.id =0
    this.inclui= true
    this.editar = false
     this.mensagem = ''
  }
     cmdSalvar(){
    this.turmaService.post(this.model)
     .subscribe ((value:Turma) => {
      this.mensagem = 'Salvou com sucesso!'
     },
    err =>{
      this.mensagem ='Erro ao salvar'
    });
    }
    apagarMensagem(){
     this.mensagem ='',
     this.load();
    }

    cmdEditar(){
     this.turmaService.put(this.id, this.model)
     .subscribe((value:Turma)=> {
      this.mensagem = 'Salvou com sucesso!'
    },
   err =>{
     this.mensagem ='Erro ao salvar'
   });
    }
  cmdCarregarTurmaPorID(id: number){
   this.turmaService
   .getById(id)
   .subscribe((resultado) => {
    if(!(resultado == null)){
      this.model=resultado
    }}

        );

  }

}
