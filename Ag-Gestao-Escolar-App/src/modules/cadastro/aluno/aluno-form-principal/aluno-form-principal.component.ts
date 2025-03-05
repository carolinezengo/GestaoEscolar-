import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Aluno } from '../../../../../core/models/aluno.model';
import { TurmaService } from '../../../../../core/services/turma.service';
import { Observable } from 'rxjs';
import { Turma } from '../../../../../core/models/turma.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aluno-form-principal',
  standalone: false,
  templateUrl: './aluno-form-principal.component.html',
  styleUrl: './aluno-form-principal.component.sass'
})
export class AlunoFormPrincipalComponent implements OnInit {
  @Input() model: Aluno = { alunoDisciplina:[], turma: {}}
  @Output() modelEvent = new EventEmitter<Aluno>();
  @Input() disable: boolean=false
  listaTurma: Observable<Turma[]>


  constructor(private turmaService: TurmaService){
  this.listaTurma = turmaService.get()
  }

  ngOnInit(): void {
    this.disable = false
    this.model= this.model ?? {alunoDisciplina: [], turma:{}};


  }



}
