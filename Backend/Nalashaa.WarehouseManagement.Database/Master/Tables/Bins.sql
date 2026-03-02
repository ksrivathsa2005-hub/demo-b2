CREATE TABLE [Master].[Bins] (
    [Id]        UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [Code]      NVARCHAR (50)    NOT NULL,
    [RackId]    UNIQUEIDENTIFIER NOT NULL,
    [CreatedAt] DATETIME2 (7)    DEFAULT (getdate()) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Bins_Racks] FOREIGN KEY ([RackId]) REFERENCES [Master].[Racks] ([Id]),
    UNIQUE NONCLUSTERED ([Code] ASC)
);

