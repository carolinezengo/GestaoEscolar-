import { Injectable } from '@angular/core';
import { Service } from './service.service';
import { Turma } from '../models/turma.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurmaService extends Service<Turma> {

  constructor(httpClient:HttpClient) {
      super(httpClient,'turma');
}
}
