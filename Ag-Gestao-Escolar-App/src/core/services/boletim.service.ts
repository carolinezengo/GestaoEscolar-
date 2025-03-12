import { Injectable } from '@angular/core';
import { Service } from './service.service';
import {AlunoDisciplina} from '../models/alunoDisciplina.model'
import { HttpClient } from '@angular/common/http';



import { first } from 'rxjs';
import { Api_Path } from '../../environments/environments';



@Injectable({
  providedIn: 'root'
})
export class BoletimService  extends Service<AlunoDisciplina> {
  constructor(httpClient:HttpClient) {
    super(httpClient,'boletim');


  }
  getByDisciplina(id:number){
    return this.httpClient.get<AlunoDisciplina[]>( `${Api_Path}api/${this.route}/disciplina/${id}`)
      .pipe(
        first()
      )
  }
  setNotas(alunoDisciplina: AlunoDisciplina[]){
    return this.httpClient.post<AlunoDisciplina[]>(
     `${Api_Path}api/${this.route}/${this.route}/disciplina`, alunoDisciplina)
      .pipe(
        first()
      )
  }

}
