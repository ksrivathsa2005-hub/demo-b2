CREATE TABLE [Master].[ReasonCodes] (
    [Id]          UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [Code]        NVARCHAR (50)    NOT NULL,
    [Description] NVARCHAR (200)   NOT NULL,
    [Type]        NVARCHAR (50)    NOT NULL,
    [CreatedAt]   DATETIME2 (7)    DEFAULT (getdate()) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    UNIQUE NONCLUSTERED ([Code] ASC)
);

