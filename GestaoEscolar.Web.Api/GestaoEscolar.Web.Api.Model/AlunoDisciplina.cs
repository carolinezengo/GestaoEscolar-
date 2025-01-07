using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestaoEscolar.Web.Api.Model
{
    public class AlunoDisciplina:Model
    {
      public virtual Aluno? Aluno { get; set; }
      public virtual Disciplina? Disciplina { get; set; }
      public long IdAluno { get; set; }
      public long IdDisciplina { get; set; }
      public double? Nota1 { get; set; }
      public double? Nota2 { get; set; }
      public double? Nota3 { get; set; }
      public double? Nota4 { get; set; }
    }
}