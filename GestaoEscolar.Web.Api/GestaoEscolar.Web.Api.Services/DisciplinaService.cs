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
    
   
       
       

    }
        
}

