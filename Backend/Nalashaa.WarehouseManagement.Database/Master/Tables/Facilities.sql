CREATE TABLE [Master].[Facilities] (
    [Id]             UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [Name]           NVARCHAR (100)   NOT NULL,
    [Code]           NVARCHAR (50)    NOT NULL,
    [FacilityTypeId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedAt]      DATETIME2 (7)    DEFAULT (getdate()) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Facilities_FacilityTypes] FOREIGN KEY ([FacilityTypeId]) REFERENCES [Master].[FacilityTypes] ([Id]),
    UNIQUE NONCLUSTERED ([Code] ASC)
);

