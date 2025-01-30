import { Injectable } from '@angular/core';
import { Service } from './service.service';
import {AlunoDisciplina} from './../models/aluno-disciplina.model'
import { HttpClient } from '@angular/common/http';
import { Api_Path } from '../../../environments/environments';
import { first } from 'rxjs';
import { Aluno } from '../models/aluno.model';
@Injectable({
  providedIn: 'root'
})
export class BoletimService  extends Service<AlunoDisciplina> {

  constructor(httpClient:HttpClient) {
        super(httpClient,'boletim');


      }
      getByDisciplina(id:number){
        return this.httpClient.get<AlunoDisciplina[]>(
          `${Api_Path}/api/${this.route}/disciplina/${id}}`)
          .pipe(
            first()
          )
      }
      setNotas(alunoDisciplina: AlunoDisciplina[]){
        return this.httpClient.post<AlunoDisciplina[]>(
          `${Api_Path}/api/${this.route}/disciplina}`, alunoDisciplina)
          .pipe(
            first()
          )
      }

}
