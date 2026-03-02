CREATE TABLE [Master].[Racks] (
    [Id]         UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [Code]       NVARCHAR (50)    NOT NULL,
    [FacilityId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedAt]  DATETIME2 (7)    DEFAULT (getdate()) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Racks_Facilities] FOREIGN KEY ([FacilityId]) REFERENCES [Master].[Facilities] ([Id]),
    UNIQUE NONCLUSTERED ([Code] ASC)
);

