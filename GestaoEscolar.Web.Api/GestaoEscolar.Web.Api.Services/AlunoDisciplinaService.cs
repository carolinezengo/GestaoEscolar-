
using System.Security.AccessControl;
using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Services
{
    public class AlunoDisciplinaService : CRUDService<AlunoDisciplina>
    {
        
        public AlunoDisciplinaService(AlunoDisciplinaRepository repository) 
          : base(repository)
        {
            
        }

        private async Task<AlunoDisciplina> Map (AlunoDisciplina obj)
        {
            return await Task.Run(() => {
                var aluno = obj.Aluno;
                var disciplina = obj.Disciplina;
                obj.Aluno=null;
                obj.Disciplina=null;

                if(!(aluno is null))
                {
                    obj.IdAluno=aluno.Id;

                }
                   if(!(disciplina is null))
                {
                    obj.IdDisciplina=disciplina.Id;
                    
                }
                return obj;
            });

        }

        public async override Task<AlunoDisciplina> Add(AlunoDisciplina obj)
        {

            var model = await Map(obj);
            var result = await base.Add(model);

            return result;
        }

          public async override Task<AlunoDisciplina> Replace(long id, AlunoDisciplina obj)
        {

            var model = await Map(obj);
            var result = await base.Replace(id,model);

            return result;
        }
           


       
    }
}