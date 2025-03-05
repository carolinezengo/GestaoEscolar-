import { Injectable } from '@angular/core';
import { Service } from './service.service';
import { Disciplina } from '../models/disciplina.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService extends Service<Disciplina>{

  constructor(httpClient:HttpClient) {
      super(httpClient,'disciplina');
}
}
