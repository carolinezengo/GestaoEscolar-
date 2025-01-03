using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestaoEscolar.Web.Api.Model;

namespace GestaoEscolar.Web.Api.Repository
{
    public class TurmaRepository: Repository<Turma>
    {
        public TurmaRepository(GestaoEscolarDB db): base(db)
        {
            
        }
    }
}