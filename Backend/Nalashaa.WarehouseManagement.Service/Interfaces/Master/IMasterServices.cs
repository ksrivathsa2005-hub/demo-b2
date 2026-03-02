using Nalashaa.WarehouseManagement.Domain.Entities.Master;
using Nalashaa.WarehouseManagement.Domain.Repositories.Master;
using Nalashaa.WarehouseManagement.Infrastructure.Common;
using Nalashaa.WarehouseManagement.Infrastructure.Constants;

namespace Nalashaa.WarehouseManagement.Service.Interfaces.Master;

public interface IFacilityTypeService
{
    Task<IEnumerable<FacilityType>> GetAllAsync();
    Task<FacilityType?> GetByIdAsync(Guid id);
    Task<string> SaveAsync(FacilityType entity);
    Task<string> DeleteAsync(Guid id);
}

public interface IFacilityService
{
    Task<IEnumerable<Facility>> GetAllAsync();
    Task<Facility?> GetByIdAsync(Guid id);
    Task<string> SaveAsync(Facility entity);
    Task<string> DeleteAsync(Guid id);
}

public interface IUomService
{
    Task<IEnumerable<Uom>> GetAllAsync();
    Task<Uom?> GetByIdAsync(Guid id);
    Task<string> SaveAsync(Uom entity);
    Task<string> DeleteAsync(Guid id);
}

public interface IProductService
{
    Task<IEnumerable<Product>> GetAllAsync();
    Task<Product?> GetByIdAsync(Guid id);
    Task<string> SaveAsync(Product entity);
    Task<string> DeleteAsync(Guid id);
}

public interface ISupplierService
{
    Task<IEnumerable<Supplier>> GetAllAsync();
    Task<Supplier?> GetByIdAsync(Guid id);
    Task<string> SaveAsync(Supplier entity);
    Task<string> DeleteAsync(Guid id);
}

public interface IRackService
{
    Task<IEnumerable<Rack>> GetAllAsync();
    Task<Rack?> GetByIdAsync(Guid id);
    Task<string> SaveAsync(Rack entity);
    Task<string> DeleteAsync(Guid id);
}

public interface IBinService
{
    Task<IEnumerable<Bin>> GetAllAsync();
    Task<Bin?> GetByIdAsync(Guid id);
    Task<string> SaveAsync(Bin entity);
    Task<string> DeleteAsync(Guid id);
}

public interface IReasonCodeService
{
    Task<IEnumerable<ReasonCode>> GetAllAsync();
    Task<ReasonCode?> GetByIdAsync(Guid id);
    Task<string> SaveAsync(ReasonCode entity);
    Task<string> DeleteAsync(Guid id);
}
