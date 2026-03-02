using Nalashaa.WarehouseManagement.Domain.Entities.Master;
using Nalashaa.WarehouseManagement.Domain.Repositories;

namespace Nalashaa.WarehouseManagement.Domain.Repositories.Master;

public interface IFacilityTypeRepository : IBaseRepository<FacilityType> { }
public interface IFacilityRepository : IBaseRepository<Facility> { }
public interface IUomRepository : IBaseRepository<Uom> { }
public interface IProductRepository : IBaseRepository<Product> { }
public interface ISupplierRepository : IBaseRepository<Supplier> { }
public interface IRackRepository : IBaseRepository<Rack> { }
public interface IBinRepository : IBaseRepository<Bin> { }
public interface IBomHeaderRepository : IBaseRepository<BomHeader> { }
public interface IBomComponentRepository : IBaseRepository<BomComponent> { }
public interface IReasonCodeRepository : IBaseRepository<ReasonCode> { }
