CREATE TABLE [Transactional].[Inventory] (
    [Id] UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    [FacilityId] UNIQUEIDENTIFIER NOT NULL,
    [BinId] UNIQUEIDENTIFIER NOT NULL,
    [ProductId] UNIQUEIDENTIFIER NOT NULL,
    [Quantity] DECIMAL(18, 4) NOT NULL DEFAULT 0,
    [UomId] UNIQUEIDENTIFIER NOT NULL,
    [LastUpdatedAt] DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_Inventory_Facility FOREIGN KEY (FacilityId) REFERENCES [Master].[Facilities](Id),
    CONSTRAINT FK_Inventory_Bin FOREIGN KEY (BinId) REFERENCES [Master].[Bins](Id),
    CONSTRAINT FK_Inventory_Product FOREIGN KEY (ProductId) REFERENCES [Master].[Products](Id),
    CONSTRAINT FK_Inventory_Uom FOREIGN KEY (UomId) REFERENCES [Master].[Uoms](Id)
);
