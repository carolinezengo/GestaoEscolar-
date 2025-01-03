using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestaoEscolar.Web.Api.Model
{
    public class Disciplina : Model
    {
        public string Descricao { get; set; }
        public AlunoDisciplina[]? AlunoDisciplinas { get; set; }
    }
}