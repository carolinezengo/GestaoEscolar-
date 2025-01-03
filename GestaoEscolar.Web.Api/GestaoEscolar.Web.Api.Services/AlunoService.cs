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
        public override Aluno Add(Aluno obj)
        {
            var alunoModel = base.Add(obj);
            var AlunoDisciplinaDAO= obj.AlunoDisciplina ?? new AlunoDisciplina[] {};
            var AlunoDisciplinas = AlunoDisciplinaDAO.ToList();
             AlunoDisciplinas.ForEach(alunoDisciplina =>{ alunoDisciplina.Aluno = alunoModel;
             AlunoDisciplinaService.Add(alunoDisciplina);
             
               
             });
            return alunoModel;
        }
         public override Aluno Replace(long id, Aluno obj)
        {
            var alunoModel = base.Add(obj);
            var AlunoDisciplinaDAO= obj.AlunoDisciplina ?? new AlunoDisciplina[] {};
            var AlunoDisciplinas = AlunoDisciplinaDAO.ToList();
             AlunoDisciplinas.ForEach(alunoDisciplina =>{ alunoDisciplina.Aluno = alunoModel;
             AlunoDisciplinaService.Replace(alunoDisciplina.Id, alunoDisciplina);
             
               
             });
            return alunoModel;
        }
           public override void Remove(long id)
        {
            var alunoModel = Repository.Find(id);
            base.Remove(id);
            if(!(alunoModel is null ))
            {
                var alunoDisciplinaDAO = alunoModel.AlunoDisciplina ?? new AlunoDisciplina[] {};
                var alunoDisciplinas= alunoDisciplinaDAO.ToList();
                alunoDisciplinas.ForEach(alunoDisciplina => {
                    AlunoDisciplinaService.Remove(alunoDisciplina.Id);

                });
            }
        }

    }
}