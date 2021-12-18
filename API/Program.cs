using System;
using API.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            // the using keyword will automatically dispose of any resources that we're using as part of this
            using var scope = host.Services.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<StoreContext>(); 
            var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
            try
            {
                 context.Database.Migrate();
                 DbInitializer.Initialize(context);
            }
            catch (Exception ex)
            {
                
                logger.LogError(ex, "Problem migrating data");
            }

            host.Run();

            // triggers the garbage collection to throw away the exception logging
            // instead we're use the using keyword
            // finally
            // {
            //     scope.Dispose();
            // }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
