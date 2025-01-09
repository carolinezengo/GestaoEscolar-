using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.XPath;
using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;


namespace GestaoEscolar.Web.Api.Services
{
    public class BoletimService : CRUDService<AlunoDisciplina>
    {
        public BoletimService(AlunoDisciplinaRepository repository) : base(repository)
        {
        }
       public async  Task<AlunoDisciplina[]> AtualizarNotas (AlunoDisciplina[] alunoDisciplinas)
       {
        var currentAlunoDisciplina = await Repository.All();
        var selectAlunoDisciplina = currentAlunoDisciplina
           .Join(alunoDisciplinas,
         a => a.Id, b=>b.Id,(a,b)=> new {Id = a.Id,
               CurrentElement = a,
              ValueElement =b });
       
         var updateAlunoDisciplinas = selectAlunoDisciplina.ToList();
         updateAlunoDisciplinas.ForEach(async uad => {
            uad.CurrentElement.Nota1= uad.ValueElement.Nota1;
             uad.CurrentElement.Nota2= uad.ValueElement.Nota2;
              uad.CurrentElement.Nota3= uad.ValueElement.Nota3;
               uad.CurrentElement.Nota4= uad.ValueElement.Nota4;
        
        
         await Repository.Update(uad.Id, uad.CurrentElement);
 
 });

        var updateAlunoDisciplina = updateAlunoDisciplinas.Select(uad => uad.CurrentElement);
        var result = updateAlunoDisciplina.ToArray();
        return result;
       }


       public async Task<AlunoDisciplina[]> RetornaDisciplina (long id)
       {
        var alunoDisciplinas = await Repository.All();
        var alunoDisciplinasDisciplinas = alunoDisciplinas.Where(ad => ad.IdDisciplina == id);
        var result = alunoDisciplinasDisciplinas.ToArray();
        return result;

       }
            public async Task<AlunoDisciplina[]> RetornaAluno (long id)
       {
        var alunoDisciplinas = await Repository.All();
        var alunoDisciplinasAluno = alunoDisciplinas.Where(ad => ad.IdDisciplina == id);
        var result = alunoDisciplinasAluno.ToArray();
        return result;

       }

    }
}