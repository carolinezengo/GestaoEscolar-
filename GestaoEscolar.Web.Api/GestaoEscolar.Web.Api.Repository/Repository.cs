using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Schema;
using Castle.DynamicProxy.Generators.Emitters.SimpleAST;
using Microsoft.EntityFrameworkCore;


namespace GestaoEscolar.Web.Api.Repository
{
    public abstract class Repository<TModel>
     where TModel: Model.Model
    {
        protected GestaoEscolarContext Db {get; set;} 
        protected DbSet<TModel> DbSet {get; set;}
        public Repository(GestaoEscolarContext db){
            Db = db;
            DbSet= Db.Set<TModel>();
        }
        public async virtual Task<TModel> Insert(TModel obj){
           await DbSet.AddAsync(obj);
           await Db.SaveChangesAsync();
            
            return obj;
        }
             public async virtual Task<TModel> Update(long id,TModel obj){
         
              var curModel = await DbSet.FirstOrDefaultAsync(m => m.Id.Equals(id));
              if(curModel != null){
              Db.Entry(curModel).CurrentValues.SetValues(obj);
               await Db.SaveChangesAsync();
           
                 
              }
                return obj;
             
        }
        
             public  async virtual Task Delete(long id){
         
              var curModel = await DbSet.FirstOrDefaultAsync(m => m.Id.Equals(id));
              if(curModel != null){
                 DbSet.Remove(curModel);
              }
             
                 await Db.SaveChangesAsync();
           
        }
         public  async virtual Task<TModel>  Find(long id){
         
             var curModel = await DbSet.FirstOrDefaultAsync(m => m.Id.Equals(id));
             
                 return curModel;
                         
        }
              public async  virtual Task<TModel[]>  All(){
              
              
             return  await Task.Run(()=> {
                var allEllementis = DbSet.AsEnumerable();
                var result = allEllementis.ToArray();
                return result;
             });
              
        }

        
    }
}