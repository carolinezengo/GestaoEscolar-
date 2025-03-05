import { Injectable } from '@angular/core';
import { Service } from './service.service';
import {AlunoDisciplina} from '../models/alunoDisciplina.model'
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/core/services/boletim.service.ts

=======
import { API_Path } from '../../environments/environment';
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/core/services/boletim.service.ts
import { first } from 'rxjs';
import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class BoletimService  extends Service<AlunoDisciplina> {

  constructor(httpClient:HttpClient) {
        super(httpClient,'boletim');


      }
      getByDisciplina(id:Number){
        return this.httpClient.get<AlunoDisciplina[]>(
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/core/services/boletim.service.ts
          `api/${this.route}/disciplina/${id}`)
=======
          `${API_Path}/api/${this.route}/disciplina/${id}}`)
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/core/services/boletim.service.ts
          .pipe(
            first()
          )
      }
      setNotas(alunoDisciplina: AlunoDisciplina[]){
        return this.httpClient.post<AlunoDisciplina[]>(
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/core/services/boletim.service.ts
          `api/${this.route}`, alunoDisciplina)
=======
          `${API_Path}/api/${this.route}/disciplina}`, alunoDisciplina)
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/core/services/boletim.service.ts
          .pipe(
            first()
          )
      }

}
