using Microsoft.Extensions.DependencyInjection;
using Nalashaa.WarehouseManagement.Service.Interfaces.Master;
using Nalashaa.WarehouseManagement.Service.Services.Master;

namespace Nalashaa.WarehouseManagement.Service
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            // Master Services
            services.AddScoped<IFacilityTypeService, FacilityTypeService>();
            services.AddScoped<IFacilityService, FacilityService>();
            services.AddScoped<IUomService, UomService>();
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<ISupplierService, SupplierService>();
            services.AddScoped<IRackService, RackService>();
            services.AddScoped<IBinService, BinService>();
            services.AddScoped<IReasonCodeService, ReasonCodeService>();

            return services;
        }
    }
}
