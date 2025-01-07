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
       
     public GestaoEscolarContext(DbContextOptions<GestaoEscolarContext> options)
     : base(options)
     {

     
     }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

         modelBuilder.Entity<Aluno>(buildAction => {
            modelBuilder.Entity<Aluno>(buildAction => {
               buildAction.ToTable("Aluno");
               buildAction.HasKey(model => model.Id);

               buildAction.Property(model => model.Id)
                           .HasColumnName("id")
                           .ValueGeneratedOnAdd();

                buildAction.Property(model => model.Nome)
                           .HasColumnName("nome");

                buildAction.Property(model => model.Matricula)
                           .HasColumnName("matricula");

                buildAction.Property(model => model.IdTurma)
                           .HasColumnName("idTurma");

                buildAction.HasOne(detail => detail.Turma)
                            .WithMany(master => master.Alunos)
                            .HasForeignKey(model => model.IdTurma)
                            .OnDelete(DeleteBehavior.Cascade);

            });

         
            modelBuilder.Entity<Disciplina>(buildAction => {
               buildAction.ToTable("disciplina");
               buildAction.HasKey(model => model.Id);

               buildAction.Property(model => model.Id)
                           .HasColumnName("id")
                           .ValueGeneratedOnAdd();

                buildAction.Property(model => model.Descricao)
                           .HasColumnName("descricao");

                               

            }); 

            
             modelBuilder.Entity<AlunoDisciplina>(buildAction => {
               buildAction.ToTable("alunoDisciplina");
               buildAction.HasKey(model => model.Id);

               buildAction.Property(model => model.Id)
                           .HasColumnName("id")
                           .ValueGeneratedOnAdd();

                buildAction.Property(model => model.IdAluno)
                           .HasColumnName("idAluno");

                 buildAction.Property(model => model.IdDisciplina)
                           .HasColumnName("idDisciplina");           


                 buildAction.Property(model => model.Nota1)
                           .HasColumnName("Nota1");  

                 buildAction.Property(model => model.Nota2)
                           .HasColumnName("Nota2"); 

                 buildAction.Property(model => model.Nota3)
                           .HasColumnName("Nota3");       
                

                buildAction.HasOne(detail => detail.Aluno)
                            .WithMany(master => master.AlunoDisciplina)
                            .HasForeignKey(model => model.IdAluno)
                            .OnDelete(DeleteBehavior.Cascade);
                            
                buildAction.HasOne(detail => detail.Disciplina)
                            .WithMany(master => master.AlunoDisciplinas)
                            .HasForeignKey(model => model.IdDisciplina)
                            .OnDelete(DeleteBehavior.Cascade);

                     

            });   

            
         modelBuilder.Entity<Turma>(buildAction => {
               buildAction.ToTable("turma");
               buildAction.HasKey(model => model.Id);

               buildAction.Property(model => model.Id)
                           .HasColumnName("id")
                           .ValueGeneratedOnAdd();

                buildAction.Property(model => model.Periodo)
                           .HasColumnName("periodo");

              

            }); 

         });
            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
            base.OnConfiguring(optionsBuilder);
        }

    }
    
}
