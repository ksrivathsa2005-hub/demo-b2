using Nalashaa.WarehouseManagement.Domain.Entities.Master;
using Nalashaa.WarehouseManagement.Domain.Repositories;
using Nalashaa.WarehouseManagement.Domain.Repositories.Master;
using Nalashaa.WarehouseManagement.Infrastructure.Common;
using Nalashaa.WarehouseManagement.Infrastructure.Constants;
using Nalashaa.WarehouseManagement.Service.Interfaces.Master;

namespace Nalashaa.WarehouseManagement.Service.Services.Master;

public abstract class BaseMasterService<T, TRepo> where T : class where TRepo : IBaseRepository<T>
{
    protected readonly TRepo _repository;
    protected readonly IUnitOfWork _unitOfWork;

    protected BaseMasterService(TRepo repository, IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<T>> GetAllAsync() => await _repository.GetAllAsync();
    public async Task<T?> GetByIdAsync(Guid id) => await _repository.GetByIdAsync(id);

    public async Task<string> SaveAsync(T entity)
    {
        try
        {
            _unitOfWork.BeginTransaction();
            var idProperty = typeof(T).GetProperty("Id");
            var idValue = (Guid)idProperty!.GetValue(entity)!;

            if (idValue == Guid.Empty)
            {
                idProperty.SetValue(entity, Guid.NewGuid());
                await _repository.AddAsync(entity);
                _unitOfWork.Commit();
                return MessageConstants.Save_Success;
            }
            else
            {
                await _repository.UpdateAsync(entity);
                _unitOfWork.Commit();
                return MessageConstants.Update_Success;
            }
        }
        catch
        {
            _unitOfWork.Rollback();
            return MessageConstants.Error_Database;
        }
    }

    public async Task<string> DeleteAsync(Guid id)
    {
        try
        {
            _unitOfWork.BeginTransaction();
            await _repository.DeleteAsync(id);
            _unitOfWork.Commit();
            return MessageConstants.Delete_Success;
        }
        catch
        {
            _unitOfWork.Rollback();
            return MessageConstants.Error_Database;
        }
    }
}

public class FacilityTypeService : BaseMasterService<FacilityType, IFacilityTypeRepository>, IFacilityTypeService
{
    public FacilityTypeService(IFacilityTypeRepository repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork) { }
}

public class FacilityService : BaseMasterService<Facility, IFacilityRepository>, IFacilityService
{
    public FacilityService(IFacilityRepository repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork) { }
}

public class UomService : BaseMasterService<Uom, IUomRepository>, IUomService
{
    public UomService(IUomRepository repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork) { }
}

public class ProductService : BaseMasterService<Product, IProductRepository>, IProductService
{
    public ProductService(IProductRepository repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork) { }
}

public class SupplierService : BaseMasterService<Supplier, ISupplierRepository>, ISupplierService
{
    public SupplierService(ISupplierRepository repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork) { }
}

public class RackService : BaseMasterService<Rack, IRackRepository>, IRackService
{
    public RackService(IRackRepository repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork) { }
}

public class BinService : BaseMasterService<Bin, IBinRepository>, IBinService
{
    public BinService(IBinRepository repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork) { }
}

public class ReasonCodeService : BaseMasterService<ReasonCode, IReasonCodeRepository>, IReasonCodeService
{
    public ReasonCodeService(IReasonCodeRepository repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork) { }
}
