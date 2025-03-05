import { Component, OnInit } from '@angular/core';
import { Turma } from '../../../../core/models/turma.model';
import { TurmaService } from '../../../../core/services/turma.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-turma-list',
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/modules/cadastros/turma/turma-list/turma-list.component.ts
  standalone: false,

=======
  imports: [],
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/modules/cadastro/turma/turma-list/turma-list.component.ts
  templateUrl: './turma-list.component.html',
  styleUrl: './turma-list.component.sass'
})
export class TurmaListComponent implements OnInit {

  model: Turma ={};
    listaTurma : Observable<Turma[]>


    constructor(private turmaService: TurmaService, private router: Router) {
     this.listaTurma = this.turmaService.get();

     }
  ngOnInit(): void {

  }


    cmdRemover(item: Turma) {
      var id: number;
      id = Number(item.id);
      this.turmaService.delete(id).subscribe(() => {});
      this.load();
    }

    cmdEditar(item: Turma){
      var id: number;
      id = Number(item.id);
      this.router.navigateByUrl(`cadastros/turma/${id}/editar`);
    }

    load() {
      location.reload();
    }

}
