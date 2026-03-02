CREATE TABLE [Master].[FacilityTypes] (
    [Id]        UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [Name]      NVARCHAR (100)   NOT NULL,
    [CreatedAt] DATETIME2 (7)    DEFAULT (getdate()) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

