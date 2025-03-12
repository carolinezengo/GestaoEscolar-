using Microsoft.Extensions.Options;
using GestaoEscolar.Web.Api.Services;
using GestaoEscolar.Web.Api.Repository;




var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
.AddJsonOptions(opstions => opstions.JsonSerializerOptions.ReferenceHandler
= System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<GestaoEscolarContextFactory>();
builder.Services.AddTransient(opto => opto.GetService<GestaoEscolarContextFactory>().CreateDbContext());
builder.Services.AddScoped<AlunoRepository>();
builder.Services.AddScoped<AlunoDisciplinaRepository>();
builder.Services.AddScoped<TurmaRepository>();
builder.Services.AddScoped<DisciplinaRepository>();
builder.Services.AddScoped<AlunoService>();
builder.Services.AddScoped<AlunoDisciplinaService>();
builder.Services.AddScoped<TurmaService>();
builder.Services.AddScoped<BoletimService>();
builder.Services.AddScoped<DisciplinaService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
 app.UseCors(option => option.AllowAnyOrigin()
                             .AllowAnyMethod()
                             .AllowAnyHeader()
                             );;

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
