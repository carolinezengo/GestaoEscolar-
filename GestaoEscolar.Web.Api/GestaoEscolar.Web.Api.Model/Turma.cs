using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestaoEscolar.Web.Api.Model
{
    public class Turma: Model
    {
        public string? Periodo { get; set; }
        public Aluno[]? Alunos { get; set; }
        
        
    }
}