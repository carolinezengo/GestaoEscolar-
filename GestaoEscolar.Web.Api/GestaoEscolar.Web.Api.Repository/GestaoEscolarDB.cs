using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.XPath;
using GestaoEscolar.Web.Api.Model;

namespace GestaoEscolar.Web.Api.Repository
{
    public class GestaoEscolarDB
    {
        public List<Aluno> Alunos {get; set;}
         public List<Disciplina> Disciplinas {get; set;}
          public List<AlunoDisciplina> AlunoDisciplinas {get; set;}
         public List<Turma> Turmas {get; set;}

         public GestaoEscolarDB(){
            Alunos = new List<Aluno>();
            Disciplinas = new List<Disciplina>();
            AlunoDisciplinas = new List<AlunoDisciplina>();
            Turmas = new List<Turma>();
         }
         public List<TModel> Set<TModel>()
         {
            var typeList = typeof(List<TModel>);
            var typeDb = this.GetType();
            var dbProps = typeDb.GetProperties();
            var propList = dbProps.FirstOrDefault(p => p.PropertyType == typeList);
            var result = propList.GetValue(this) as List<TModel>;

            return result;
         }
    }

}