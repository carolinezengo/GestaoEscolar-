import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/core/services/service.service.ts
import { first, Observable } from 'rxjs';


=======
import { first } from 'rxjs';
import { API_Path } from '../../environments/environment';
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/core/services/service.service.ts

@Injectable({
  providedIn: 'root'
})
export abstract class Service <T> {

  constructor(protected httpClient:HttpClient, protected route:string) { }



get(){
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/core/services/service.service.ts
  return this.httpClient.get<T[]>(`api/${this.route}`)
=======
  return this.httpClient.get<T[]>(`${API_Path}api/${this.route}`)
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/core/services/service.service.ts
  .pipe(
    first()
  )
}
  getById(id:Number){
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/core/services/service.service.ts
    return this.httpClient.get<T>(`api/${this.route}/${id}`)
=======
    return this.httpClient.get<T>(`${API_Path}api/${this.route}/${id}`)
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/core/services/service.service.ts
    .pipe(
      first()
    )
  }
  put(id:Number, obj:T){
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/core/services/service.service.ts
    return this.httpClient.put<T>(`api/${this.route}/${id}`, obj)
=======
    return this.httpClient.put<T>(`${API_Path}api/${this.route}/${id}`, obj)
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/core/services/service.service.ts
    .pipe(
      first()
    )
  }
  delete(id:Number){
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/core/services/service.service.ts
    return this.httpClient.delete(`api/${this.route}/${id}`)
=======
    return this.httpClient.delete(`${API_Path}api/${this.route}/${id}`)
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/core/services/service.service.ts
    .pipe(
      first()
    )
  }
<<<<<<< HEAD:Ag-Gestao-Escolar-App/src/app/core/services/service.service.ts
    post(obj:T) {
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(obj);
      console.log(body)

      return  this.httpClient.post<T>(`api/${this.route}`, body, {'headers':headers})
      .pipe(
        first()
      )

=======
  post( obj:T){
    return this.httpClient.post<T>(`${API_Path}api/${this.route}`, obj)
    .pipe(
      first()
    )
>>>>>>> parent of 0bf0825 ( Implementacao do Formulario da Disciplina):Ag-Gestao-Escolar-App/src/core/services/service.service.ts
  }
}

