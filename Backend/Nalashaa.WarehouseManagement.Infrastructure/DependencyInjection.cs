using System.Data;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Nalashaa.WarehouseManagement.Domain.Repositories;
using Nalashaa.WarehouseManagement.Domain.Repositories.Master;
using Nalashaa.WarehouseManagement.Infrastructure.Common;
using Nalashaa.WarehouseManagement.Infrastructure.Repositories.Master;

namespace Nalashaa.WarehouseManagement.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            // Database Connection
            services.AddScoped<IDbConnection>(sp => 
                new SqlConnection(configuration.GetConnectionString("SqlConnection")));

            // Unit of Work
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            // Repositories
            services.AddScoped<IFacilityTypeRepository, FacilityTypeRepository>();
            services.AddScoped<IFacilityRepository, FacilityRepository>();
            services.AddScoped<IUomRepository, UomRepository>();
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<ISupplierRepository, SupplierRepository>();
            services.AddScoped<IRackRepository, RackRepository>();
            services.AddScoped<IBinRepository, BinRepository>();
            services.AddScoped<IBomHeaderRepository, BomHeaderRepository>();
            services.AddScoped<IBomComponentRepository, BomComponentRepository>();
            services.AddScoped<IReasonCodeRepository, ReasonCodeRepository>();

            return services;
        }
    }
}
