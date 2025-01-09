using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace GestaoEscolar.Web.Api.Repository
{
    public class GestaoEscolarContextFactory : IDesignTimeDbContextFactory<GestaoEscolarContext>
    {
        public GestaoEscolarContext CreateDbContext(string[] args = null)
        {
           var basePath = Directory.GetCurrentDirectory();
           var appsettingFIleName = "appsettings.json";
           
           #if DEBUG

           basePath=Path.Combine(basePath, "GestaoEscolar.Web.Api","GestaoEscolar.Web.Api.App" );
           var appsettingFIleNamePath= Path.Combine(basePath, appsettingFIleName);
           if(!File.Exists(appsettingFIleNamePath))
           {
            basePath=Directory.GetCurrentDirectory();
            basePath=Path.Combine(basePath, "...", "GestaoEscolar.Wb.Api.App");
           }
           #endif
           var configuration= new ConfigurationBuilder()
                               .SetBasePath(basePath)
                               .AddJsonFile(appsettingFIleName)
                               .Build();

            var builder=new DbContextOptionsBuilder<GestaoEscolarContext>();
            var connectionStringKey= "GestaoEscolarConnectionString";
            builder.UseNpgsql(configuration.GetConnectionString(connectionStringKey));

            var result= new GestaoEscolarContext(builder.Options);
            return result;                   
           

        }
    }
}