CREATE TABLE [Master].[BomHeader] (
    [Id]              UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [ParentProductId] UNIQUEIDENTIFIER NOT NULL,
    [Description]     NVARCHAR (200)   NULL,
    [CreatedAt]       DATETIME2 (7)    DEFAULT (getdate()) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_BomHeader_Products] FOREIGN KEY ([ParentProductId]) REFERENCES [Master].[Products] ([Id]),
    UNIQUE NONCLUSTERED ([ParentProductId] ASC)
);

