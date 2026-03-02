CREATE TABLE [Transactional].[StockTransactions] (
    [Id] UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    [ProductId] UNIQUEIDENTIFIER NOT NULL,
    [FacilityId] UNIQUEIDENTIFIER NOT NULL,
    [BinId] UNIQUEIDENTIFIER,
    [TransactionType] NVARCHAR(50) NOT NULL, -- Receipt, Issue, Transfer, Adjustment
    [Quantity] DECIMAL(18, 4) NOT NULL,
    [ReferenceNumber] NVARCHAR(100),
    [ReasonCodeId] UNIQUEIDENTIFIER,
    [TransactionDate] DATETIME2 DEFAULT GETDATE(),
    CONSTRAINT FK_ST_Product FOREIGN KEY (ProductId) REFERENCES [Master].[Products](Id),
    CONSTRAINT FK_ST_Facility FOREIGN KEY (FacilityId) REFERENCES [Master].[Facilities](Id),
    CONSTRAINT FK_ST_Bin FOREIGN KEY (BinId) REFERENCES [Master].[Bins](Id),
    CONSTRAINT FK_ST_ReasonCode FOREIGN KEY (ReasonCodeId) REFERENCES [Master].[ReasonCodes](Id)
);
