CREATE TABLE [Transactional].[InternalTransferOrders] (
    [Id] UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    [OrderNumber] NVARCHAR(50) NOT NULL UNIQUE,
    [SourceFacilityId] UNIQUEIDENTIFIER NOT NULL,
    [DestinationFacilityId] UNIQUEIDENTIFIER NOT NULL,
    [Status] NVARCHAR(50) NOT NULL,
    [CreatedBy] NVARCHAR(100),
    [CreatedAt] DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_ITO_SourceFacility FOREIGN KEY (SourceFacilityId) REFERENCES [Master].[Facilities](Id),
    CONSTRAINT FK_ITO_DestFacility FOREIGN KEY (DestinationFacilityId) REFERENCES [Master].[Facilities](Id)
);
