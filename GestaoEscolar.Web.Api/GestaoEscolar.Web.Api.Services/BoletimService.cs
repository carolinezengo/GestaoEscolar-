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
       public AlunoDisciplina[] AtualizarNotas (AlunoDisciplina[] alunoDisciplinas)
       {
        var currentAlunoDisciplina = Repository.All();
        var selectAlunoDisciplina = currentAlunoDisciplina.Join
        (alunoDisciplinas, a=> a.Id, b=> b.Id , (a,b) => 
        new {
            currentElement =a, ValueElement= b});
         var updateAlunoDisciplina = selectAlunoDisciplina.ToList();
         updateAlunoDisciplina.ForEach(uad => {
            uad.currentElement.Nota1= uad.ValueElement.Nota1;
             uad.currentElement.Nota2= uad.ValueElement.Nota2;
              uad.currentElement.Nota3= uad.ValueElement.Nota3;
               uad.currentElement.Nota4= uad.ValueElement.Nota4;

        });
        var updateAlunoDisciplinas = updateAlunoDisciplina.Select(uad => uad.currentElement);
        var result = updateAlunoDisciplinas.ToArray();
        return result;
       }
       public AlunoDisciplina[] RetornaDisciplina (long id)
       {
        var alunoDisciplinas = Repository.All();
        var alunoDisciplinasDisciplinas = alunoDisciplinas.Where(ad => ad.Disciplina.Id == id);
        var result = alunoDisciplinasDisciplinas.ToArray();
        return result;

       }
            public AlunoDisciplina[] RetornaAluno (long id)
       {
        var alunoDisciplinas = Repository.All();
        var alunoDisciplinasAluno = alunoDisciplinas.Where(ad => ad.Aluno.Id == id);
        var result = alunoDisciplinasAluno.ToArray();
        return result;

       }

    }
}