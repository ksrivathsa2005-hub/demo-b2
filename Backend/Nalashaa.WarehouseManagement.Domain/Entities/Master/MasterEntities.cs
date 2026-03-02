namespace Nalashaa.WarehouseManagement.Domain.Entities.Master;

public class FacilityType
{
    public Guid Id { get; set; }
    public string Code { get; set; } = string.Empty;
    public string? Description { get; set; }
}

public class Facility
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public Guid FacilityTypeId { get; set; }
}

public class Uom
{
    public Guid Id { get; set; }
    public string Code { get; set; } = string.Empty;
    public string? Description { get; set; }
}

public class Product
{
    public Guid Id { get; set; }
    public string Sku { get; set; } = string.Empty;
    public Guid UomId { get; set; }
    public int SafetyThreshold { get; set; }
}

public class Supplier
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Status { get; set; } = "Active";
}

public class Rack
{
    public Guid Id { get; set; }
    public Guid FacilityId { get; set; }
    public string Code { get; set; } = string.Empty;
}

public class Bin
{
    public Guid Id { get; set; }
    public Guid RackId { get; set; }
    public string Code { get; set; } = string.Empty;
    public decimal Capacity { get; set; }
}

public class BomHeader
{
    public Guid Id { get; set; }
    public Guid ParentId { get; set; }
}

public class BomComponent
{
    public Guid Id { get; set; }
    public Guid BomId { get; set; }
    public Guid ChildId { get; set; }
    public decimal QuantityRequired { get; set; }
}

public class ReasonCode
{
    public Guid Id { get; set; }
    public string Code { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}
