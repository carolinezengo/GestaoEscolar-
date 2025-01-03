using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;


namespace GestaoEscolar.Web.Api.Services
{
    public abstract class CRUDService<TModel> : Services<TModel> 
    where TModel: Model.Model
    {
        public CRUDService(Repository<TModel> repository) : base(repository)
        {
        }

        public virtual TModel Add(TModel obj)
        {
            var result = Repository.Insert(obj);
            return result;
        }
         public virtual TModel Replace(long id, TModel obj)
        {
            var result = Repository.Update(id,obj);
            return result;
        }
         public virtual void Remove(long id)
        {
             Repository.Delete(id);
           
        }
         public virtual TModel Single(long id)
        {
            var result = Repository.Find(id);
            return result;
        }
         public virtual TModel[] All()
        {
            var result = Repository.All();
            return result;
        }
    }
}