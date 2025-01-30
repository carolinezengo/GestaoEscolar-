import { AlunoDisciplina } from "./aluno-disciplina.model";
import { Model } from "./model";
import { Turma } from "./turma.model";

export interface Aluno  extends Model{
  name?:string;
  matricula?:string;
  turma?: Turma;
  alunoDisciplina?: AlunoDisciplina[];
}

