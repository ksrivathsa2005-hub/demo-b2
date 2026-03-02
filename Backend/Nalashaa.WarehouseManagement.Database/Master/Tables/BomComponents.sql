CREATE TABLE [Master].[BomComponents] (
    [Id]                 UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [BomHeaderId]        UNIQUEIDENTIFIER NOT NULL,
    [ComponentProductId] UNIQUEIDENTIFIER NOT NULL,
    [Quantity]           DECIMAL (18, 4)  NOT NULL,
    [CreatedAt]          DATETIME2 (7)    DEFAULT (getdate()) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_BomComponents_BomHeader] FOREIGN KEY ([BomHeaderId]) REFERENCES [Master].[BomHeader] ([Id]),
    CONSTRAINT [FK_BomComponents_Products] FOREIGN KEY ([ComponentProductId]) REFERENCES [Master].[Products] ([Id])
);

