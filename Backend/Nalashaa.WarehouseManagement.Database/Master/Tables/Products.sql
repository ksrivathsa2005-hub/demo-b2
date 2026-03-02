CREATE TABLE [Master].[Products] (
    [Id]          UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [Code]        NVARCHAR (50)    NOT NULL,
    [Description] NVARCHAR (200)   NOT NULL,
    [UomId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedAt]   DATETIME2 (7)    DEFAULT (getdate()) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Products_Uoms] FOREIGN KEY ([UomId]) REFERENCES [Master].[Uoms] ([Id]),
    UNIQUE NONCLUSTERED ([Code] ASC)
);

