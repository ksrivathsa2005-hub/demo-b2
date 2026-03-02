CREATE TABLE [Transactional].[InternalTransferOrderItems] (
    [Id] UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    [OrderId] UNIQUEIDENTIFIER NOT NULL,
    [ProductId] UNIQUEIDENTIFIER NOT NULL,
    [Quantity] DECIMAL(18, 4) NOT NULL,
    [UomId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT FK_ITOI_Order FOREIGN KEY (OrderId) REFERENCES [Transactional].[InternalTransferOrders](Id),
    CONSTRAINT FK_ITOI_Product FOREIGN KEY (ProductId) REFERENCES [Master].[Products](Id),
    CONSTRAINT FK_ITOI_Uom FOREIGN KEY (UomId) REFERENCES [Master].[Uoms](Id)
);
