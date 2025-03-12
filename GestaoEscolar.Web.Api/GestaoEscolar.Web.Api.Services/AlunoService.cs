using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Services
{
    public class AlunoService : CRUDService<Aluno>
    {
        public AlunoDisciplinaService AlunoDisciplinaService {get; set;}
        public AlunoService(AlunoRepository repository, AlunoDisciplinaService alunoDisciplinaService)
        :base(repository){
           AlunoDisciplinaService = alunoDisciplinaService;
        }
         private async Task<Aluno> Map (Aluno obj)
        {
            return await Task.Run(() => {
                var turma = obj.Turma;
                
                obj.Turma=null;
              

                if(!(turma is null))
                {
                    obj.IdTurma=turma.Id;

                }
                 
                return obj;
            });

        }

        public  override async  Task<Aluno> Add(Aluno obj)
        {
        
            var alunoDisciplinas = obj.AlunoDisciplina ?? new AlunoDisciplina[] {};
            
             obj.AlunoDisciplina= null;
             var model = await Map(obj);
             var alunoModel = await base.Add(model);

             var alunoDisciplinaList= alunoDisciplinas.ToList();
             alunoDisciplinaList.ForEach( alunoDisciplina => {alunoDisciplina.Id = 0;
              alunoDisciplina.Aluno = alunoModel;
              var task = AlunoDisciplinaService.Add(alunoDisciplina);
              task.Wait();
              } );
              var result = await base.Single(model.Id);
              

               
           
            return result;
        }
         public async override Task<Aluno> Replace(long id, Aluno obj)
        {
              var AlunoDisciplinas = obj.AlunoDisciplina ?? new AlunoDisciplina[] {};
            
             obj.AlunoDisciplina= null;
             var model = await Map(obj);
             var alunoModel = await base.Replace(id,model);

             var alunoDisciplinaList= AlunoDisciplinas.ToList();
             alunoDisciplinaList.ForEach(alunoDisciplina => {alunoDisciplina.Id = 0;
              alunoDisciplina.Aluno = alunoModel;
             var task = AlunoDisciplinaService.Replace(alunoDisciplina.Id,alunoDisciplina);
             task.Wait();
              } );
              var result = await base.Single(model.Id);
              

               
           
            return result;
        }
          

    }
}