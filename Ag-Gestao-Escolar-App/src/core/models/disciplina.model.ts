import { AlunoDisciplina } from "./alunoDisciplina.model";
import { Model } from "./model";

export interface Disciplina extends Model {
  descricao?:string;
  alunoDisciplina?: AlunoDisciplina[];
}
