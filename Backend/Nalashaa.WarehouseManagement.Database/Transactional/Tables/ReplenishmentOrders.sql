CREATE TABLE [Transactional].[ReplenishmentOrders] (
    [Id] UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    [OrderNumber] NVARCHAR(50) NOT NULL UNIQUE,
    [FacilityId] UNIQUEIDENTIFIER NOT NULL,
    [Status] NVARCHAR(50) NOT NULL,
    [CreatedAt] DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_RO_Facility FOREIGN KEY (FacilityId) REFERENCES [Master].[Facilities](Id)
);
