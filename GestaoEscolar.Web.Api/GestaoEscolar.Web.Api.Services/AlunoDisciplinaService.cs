
using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Services
{
    public class AlunoDisciplinaService : CRUDService<AlunoDisciplina>
    {
        public AlunoDisciplinaService(AlunoDisciplinaRepository repository ) : base(repository)
        {
        }
    }
}