namespace Nalashaa.WarehouseManagement.Infrastructure.Constants;

public static class SqlConstants
{
    // FacilityTypes
    public const string FacilityType_Insert = "INSERT INTO FacilityTypes (Id, Code, Description) VALUES (@Id, @Code, @Description)";
    public const string FacilityType_Update = "UPDATE FacilityTypes SET Code = @Code, Description = @Description WHERE Id = @Id";
    
    // Facilities
    public const string Facility_Insert = "INSERT INTO Facilities (Id, Name, FacilityTypeId) VALUES (@Id, @Name, @FacilityTypeId)";
    public const string Facility_Update = "UPDATE Facilities SET Name = @Name, FacilityTypeId = @FacilityTypeId WHERE Id = @Id";

    // Uoms
    public const string Uom_Insert = "INSERT INTO Uoms (Id, Code, Description) VALUES (@Id, @Code, @Description)";
    public const string Uom_Update = "UPDATE Uoms SET Code = @Code, Description = @Description WHERE Id = @Id";

    // Products
    public const string Product_Insert = "INSERT INTO Products (Id, Sku, UomId, SafetyThreshold) VALUES (@Id, @Sku, @UomId, @SafetyThreshold)";
    public const string Product_Update = "UPDATE Products SET Sku = @Sku, UomId = @UomId, SafetyThreshold = @SafetyThreshold WHERE Id = @Id";

    // Suppliers
    public const string Supplier_Insert = "INSERT INTO Suppliers (Id, Name, Status) VALUES (@Id, @Name, @Status)";
    public const string Supplier_Update = "UPDATE Suppliers SET Name = @Name, Status = @Status WHERE Id = @Id";

    // Racks
    public const string Rack_Insert = "INSERT INTO Racks (Id, FacilityId, Code) VALUES (@Id, @FacilityId, @Code)";
    public const string Rack_Update = "UPDATE Racks SET FacilityId = @FacilityId, Code = @Code WHERE Id = @Id";

    // Bins
    public const string Bin_Insert = "INSERT INTO Bins (Id, RackId, Code, Capacity) VALUES (@Id, @RackId, @Code, @Capacity)";
    public const string Bin_Update = "UPDATE Bins SET RackId = @RackId, Code = @Code, Capacity = @Capacity WHERE Id = @Id";

    // BomHeader
    public const string BomHeader_Insert = "INSERT INTO BomHeader (Id, ParentId) VALUES (@Id, @ParentId)";
    public const string BomHeader_Update = "UPDATE BomHeader SET ParentId = @ParentId WHERE Id = @Id";

    // BomComponents
    public const string BomComponent_Insert = "INSERT INTO BomComponents (Id, BomId, ChildId, QuantityRequired) VALUES (@Id, @BomId, @ChildId, @QuantityRequired)";
    public const string BomComponent_Update = "UPDATE BomComponents SET BomId = @BomId, ChildId = @ChildId, QuantityRequired = @QuantityRequired WHERE Id = @Id";

    // ReasonCodes
    public const string ReasonCode_Insert = "INSERT INTO ReasonCodes (Id, Code, Description) VALUES (@Id, @Code, @Description)";
    public const string ReasonCode_Update = "UPDATE ReasonCodes SET Code = @Code, Description = @Description WHERE Id = @Id";
}
