using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Services
{
    public class TurmaService : CRUDService<Turma>
    {
        public TurmaService(TurmaRepository repository) : base(repository)
        {
        }
    }
}