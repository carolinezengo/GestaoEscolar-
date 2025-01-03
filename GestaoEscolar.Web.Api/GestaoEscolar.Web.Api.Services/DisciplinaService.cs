using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;
namespace GestaoEscolar.Web.Api.Services
{
 public class DisciplinaService : CRUDService<Disciplina>
  {
      public DisciplinaService(DisciplinaRepository repository, AlunoDisciplinaService alunoDisciplinaService) : base(repository)
     {
        AlunoDisciplinaService=alunoDisciplinaService;
      }


     public AlunoDisciplinaService  AlunoDisciplinaService{get; set;}
    
   
       
       
         public override Disciplina Replace(long id, Disciplina obj)
        {
            var disciplinaModel = base.Add(obj);
            var AlunoDisciplinaDAO= disciplinaModel.AlunoDisciplinas ?? new AlunoDisciplina[] {};
            var AlunoDisciplinas = AlunoDisciplinaDAO.ToList();
             AlunoDisciplinas.ForEach(alunoDisciplina =>{ alunoDisciplina.Disciplina = disciplinaModel;
             AlunoDisciplinaService.Replace(alunoDisciplina.Id, alunoDisciplina);
             
               
             });
            return disciplinaModel;
        }
           public override void Remove(long id)
        {
            var disciplinaModel = Repository.Find(id);
            base.Remove(id);
            if(!(disciplinaModel is null ))
            {
                var alunoDisciplinaDAO = disciplinaModel.AlunoDisciplinas ?? new AlunoDisciplina[] {};
                var alunoDisciplinas= alunoDisciplinaDAO.ToList();
                alunoDisciplinas.ForEach(alunoDisciplina => {
                    AlunoDisciplinaService.Remove(alunoDisciplina.Id);

                });
            }
        }

    }
        
}

