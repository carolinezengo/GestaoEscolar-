import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../../core/models/aluno.model';
import { Observable } from 'rxjs';
import { AlunoService } from '../../../../core/services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-list',
  standalone: false,

  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.sass'
})
export class AlunoListComponent implements OnInit {
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
