import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { first, Observable } from 'rxjs';
import { Api_Path } from '../../environments/environments';







@Injectable({
  providedIn: 'root'
})
export abstract class Service <T> {

  constructor(protected httpClient:HttpClient, protected route:string) { }



get(){

  return this.httpClient.get<T[]>(`${Api_Path}api/${this.route}`)



  .pipe(
    first()
  )
}
  getById(id:Number){

    return this.httpClient.get<T>(`${Api_Path}api/${this.route}/${id}`)


    .pipe(
      first()
    )
  }
  put(id:Number, obj:T){

    return this.httpClient.put<T>(`${Api_Path}api/${this.route}/${id}`, obj)



    .pipe(
      first()
    )
  }
  delete(id:Number){

    return this.httpClient.delete(`${Api_Path}api/${this.route}/${id}`)



    .pipe(
      first()
    )
  }

    post(obj:T) {
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(obj);
      console.log(body)

      return  this.httpClient.post<T>(`${Api_Path}api/${this.route}`, body, {'headers':headers})
      .pipe(
        first()
      )}


}

