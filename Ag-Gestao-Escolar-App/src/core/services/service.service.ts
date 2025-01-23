import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { API_Path } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class Service <T> {

  constructor(protected httpClient:HttpClient, protected route:string) { }

get(){
  return this.httpClient.get<T[]>(`${API_Path}api/${this.route}`)
  .pipe(
    first()
  )
}
  getById(id:Number){
    return this.httpClient.get<T>(`${API_Path}api/${this.route}/${id}`)
    .pipe(
      first()
    )
  }
  put(id:Number, obj:T){
    return this.httpClient.put<T>(`${API_Path}api/${this.route}/${id}`, obj)
    .pipe(
      first()
    )
  }
  delete(id:Number){
    return this.httpClient.delete(`${API_Path}api/${this.route}/${id}`)
    .pipe(
      first()
    )
  }
  post( obj:T){
    return this.httpClient.post<T>(`${API_Path}api/${this.route}`, obj)
    .pipe(
      first()
    )
  }
}

