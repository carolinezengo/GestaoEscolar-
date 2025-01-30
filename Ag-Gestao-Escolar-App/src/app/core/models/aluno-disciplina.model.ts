import { Aluno } from "./aluno.model";
import { Disciplina } from "./disciplina.model";
import { Model } from "./model";

export interface AlunoDisciplina extends Model{
aluno?: Aluno;
disciplina?: Disciplina;
nota1?:number;
nota2?:number;
nota3?:number;
nota4?:number;

}
