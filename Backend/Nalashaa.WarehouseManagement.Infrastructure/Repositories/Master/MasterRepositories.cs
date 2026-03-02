using Dapper;
using Nalashaa.WarehouseManagement.Domain.Entities.Master;
using Nalashaa.WarehouseManagement.Domain.Repositories.Master;
using Nalashaa.WarehouseManagement.Infrastructure.Common;
using Nalashaa.WarehouseManagement.Infrastructure.Constants;

namespace Nalashaa.WarehouseManagement.Infrastructure.Repositories.Master;

public class FacilityTypeRepository : BaseRepository<FacilityType>, IFacilityTypeRepository
{
    public FacilityTypeRepository(IUnitOfWork unitOfWork) : base(unitOfWork, "FacilityTypes") { }
    public override async Task<int> AddAsync(FacilityType entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.FacilityType_Insert, entity, _unitOfWork.Transaction);
    public override async Task<int> UpdateAsync(FacilityType entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.FacilityType_Update, entity, _unitOfWork.Transaction);
}

public class FacilityRepository : BaseRepository<Facility>, IFacilityRepository
{
    public FacilityRepository(IUnitOfWork unitOfWork) : base(unitOfWork, "Facilities") { }
    public override async Task<int> AddAsync(Facility entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.Facility_Insert, entity, _unitOfWork.Transaction);
    public override async Task<int> UpdateAsync(Facility entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.Facility_Update, entity, _unitOfWork.Transaction);
}

public class UomRepository : BaseRepository<Uom>, IUomRepository
{
    public UomRepository(IUnitOfWork unitOfWork) : base(unitOfWork, "Uoms") { }
    public override async Task<int> AddAsync(Uom entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.Uom_Insert, entity, _unitOfWork.Transaction);
    public override async Task<int> UpdateAsync(Uom entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.Uom_Update, entity, _unitOfWork.Transaction);
}

public class ProductRepository : BaseRepository<Product>, IProductRepository
{
    public ProductRepository(IUnitOfWork unitOfWork) : base(unitOfWork, "Products") { }
    public override async Task<int> AddAsync(Product entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.Product_Insert, entity, _unitOfWork.Transaction);
    public override async Task<int> UpdateAsync(Product entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.Product_Update, entity, _unitOfWork.Transaction);
}

public class SupplierRepository : BaseRepository<Supplier>, ISupplierRepository
{
    public SupplierRepository(IUnitOfWork unitOfWork) : base(unitOfWork, "Suppliers") { }
    public override async Task<int> AddAsync(Supplier entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.Supplier_Insert, entity, _unitOfWork.Transaction);
    public override async Task<int> UpdateAsync(Supplier entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.Supplier_Update, entity, _unitOfWork.Transaction);
}

public class RackRepository : BaseRepository<Rack>, IRackRepository
{
    public RackRepository(IUnitOfWork unitOfWork) : base(unitOfWork, "Racks") { }
    public override async Task<int> AddAsync(Rack entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.Rack_Insert, entity, _unitOfWork.Transaction);
    public override async Task<int> UpdateAsync(Rack entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.Rack_Update, entity, _unitOfWork.Transaction);
}

public class BinRepository : BaseRepository<Bin>, IBinRepository
{
    public BinRepository(IUnitOfWork unitOfWork) : base(unitOfWork, "Bins") { }
    public override async Task<int> AddAsync(Bin entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.Bin_Insert, entity, _unitOfWork.Transaction);
    public override async Task<int> UpdateAsync(Bin entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.Bin_Update, entity, _unitOfWork.Transaction);
}

public class BomHeaderRepository : BaseRepository<BomHeader>, IBomHeaderRepository
{
    public BomHeaderRepository(IUnitOfWork unitOfWork) : base(unitOfWork, "BomHeader") { }
    public override async Task<int> AddAsync(BomHeader entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.BomHeader_Insert, entity, _unitOfWork.Transaction);
    public override async Task<int> UpdateAsync(BomHeader entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.BomHeader_Update, entity, _unitOfWork.Transaction);
}

public class BomComponentRepository : BaseRepository<BomComponent>, IBomComponentRepository
{
    public BomComponentRepository(IUnitOfWork unitOfWork) : base(unitOfWork, "BomComponents") { }
    public override async Task<int> AddAsync(BomComponent entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.BomComponent_Insert, entity, _unitOfWork.Transaction);
    public override async Task<int> UpdateAsync(BomComponent entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.BomComponent_Update, entity, _unitOfWork.Transaction);
}

public class ReasonCodeRepository : BaseRepository<ReasonCode>, IReasonCodeRepository
{
    public ReasonCodeRepository(IUnitOfWork unitOfWork) : base(unitOfWork, "ReasonCodes") { }
    public override async Task<int> AddAsync(ReasonCode entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.ReasonCode_Insert, entity, _unitOfWork.Transaction);
    public override async Task<int> UpdateAsync(ReasonCode entity) => await _unitOfWork.Connection.ExecuteAsync(SqlConstants.ReasonCode_Update, entity, _unitOfWork.Transaction);
}
