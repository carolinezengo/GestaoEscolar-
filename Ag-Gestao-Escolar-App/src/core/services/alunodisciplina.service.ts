import { Injectable } from '@angular/core';
import { Service } from './service.service';
import { HttpClient } from '@angular/common/http';

import { AlunoDisciplina } from '../models/alunoDisciplina.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoDisciplinaService extends Service<AlunoDisciplina> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'alunodisciplina')}
}
