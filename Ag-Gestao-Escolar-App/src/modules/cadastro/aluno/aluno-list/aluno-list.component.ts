import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../../core/models/aluno.model';
import { AlunoService } from '../../../../core/services/aluno.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aluno-list',
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/modules/cadastros/aluno/aluno-list/aluno-list.component.ts
  standalone: false,

=======
  imports: [],
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/modules/cadastro/aluno/aluno-list/aluno-list.component.ts
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.sass'
})
export class AlunoListComponent  implements OnInit {

  model: Aluno ={};
  listaAluno$ : Observable<Aluno[]>


  constructor(private alunoService: AlunoService,
   private router: Router)
   {
   this.listaAluno$ = this.alunoService.get();

   }

  ngOnInit(): void {

  }

  cmdRemover(item: Aluno) {
    var id: number;
    id = Number(item.id);
    this.alunoService.delete(id).subscribe(() => {});
    this.load();
  }

  cmdEditar(item: Aluno){
    var id: number;
    id = Number(item.id);
    this.router.navigateByUrl(`cadastros/aluno/${id}/editar`);
  }

  load() {
    location.reload();
  }


}
