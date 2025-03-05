import { AlunoDisciplina } from "./alunoDisciplina.model";
import { Model } from "./model";
import { Turma } from "./turma.model";

export interface Aluno  extends Model{
  nome?:string;
  matricula?:string;
  turma?: Turma;
  alunoDisciplina? : AlunoDisciplina[];



}

