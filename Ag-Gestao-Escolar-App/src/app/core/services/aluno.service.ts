import { Injectable } from '@angular/core';
import { Service } from './service.service';
import { Aluno } from '../models/aluno.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService extends Service<Aluno> {

  constructor(httpClient:HttpClient) {
    super(httpClient,'aluno');
  }
}
