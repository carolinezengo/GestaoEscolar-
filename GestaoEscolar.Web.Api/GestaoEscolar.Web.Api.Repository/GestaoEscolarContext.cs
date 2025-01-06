using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.XPath;
using GestaoEscolar.Web.Api.Model;
using Microsoft.EntityFrameworkCore;

namespace GestaoEscolar.Web.Api.Repository
{
    public class GestaoEscolarContext : DbContext
    {
        public DbSet<Aluno> Alunos {get; set;}
         public DbSet<Disciplina> Disciplinas {get; set;}
          public DbSet<AlunoDisciplina> AlunoDisciplinas {get; set;}
         public DbSet<Turma> Turmas {get; set;}
        public GestaoEscolarContext(DbContextOptions options)
        :base(options){

        }
     
         public DbSet<TModel> Set<TModel>()
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