using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestaoEscolar.Web.Api.Model
{
    public class Aluno : Model
    {
        public string  Nome { get; set; }
     public string  Matricula{ get; set; }
     public Turma?  Turma{ get; set; }
      public AlunoDisciplina[]?  AlunoDisciplina { get; set; }
    }
}