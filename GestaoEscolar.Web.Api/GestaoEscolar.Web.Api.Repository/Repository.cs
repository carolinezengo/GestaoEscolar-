using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Schema;


namespace GestaoEscolar.Web.Api.Repository
{
    public abstract class Repository<TModel>
     where TModel: Model.Model
    {
        protected GestaoEscolarDB Db {get; set;} 
        protected List<TModel> DbSet {get; set;}
        public Repository(GestaoEscolarDB db){
            Db = db;
            DbSet= Db.Set<TModel>();
        }
        public virtual TModel Insert(TModel obj){
            DbSet.Add(obj);
            var index = DbSet.IndexOf(obj);
            index++;
            obj.Id= index;
            return obj;
        }
             public virtual TModel Update(long id,TModel obj){
         
              var curModel = DbSet.FirstOrDefault(m => m.Id == id);
           
                var index = DbSet.IndexOf(curModel);
            
             
               obj.Id= id;
              DbSet[index] = obj;
                   return obj;
             
        }
        
             public  virtual void Delete(long id){
         
              var model= DbSet.FirstOrDefault(m => m.Id == id);
              DbSet.Remove(model);
              
        }
         public  virtual TModel  Find(long id){
         
              var model= DbSet.FirstOrDefault(m => m.Id == id);
             return model;
              
        }
              public  virtual TModel[]  All(){
         
              var result= DbSet.ToArray();
             return result;
              
        }

        
    }
}