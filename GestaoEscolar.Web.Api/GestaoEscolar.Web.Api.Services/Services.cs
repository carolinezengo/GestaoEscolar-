using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestaoEscolar.Web.Api.Model;
using GestaoEscolar.Web.Api.Repository;

namespace GestaoEscolar.Web.Api.Services
{
    public abstract class Services<TModel> 
    where TModel:Model.Model
    {
        public Repository<TModel> Repository{get; set;}
        
        public Services(Repository<TModel> repository)
        {
            Repository = repository;
        }
                
    }
}