CREATE TABLE [dbo].[Orders]
(
	[OrderID] INT IDENTITY(100,1) NOT NULL PRIMARY KEY,
	[Email] VARCHAR(50) NOT NULL ,
	[RecieverName] VARCHAR(250) NOT NULL,
	[Address] VARCHAR(300) NOT NULL,
	[Products] VARCHAR(250) NOT NULL, 
	[TotalAmount] DECIMAL(6,2) NOT NULL,
	[Province] VARCHAR(20) NOT NULL,
	[OrderStatus] VARCHAR(20) DEFAULT 'Not delivered' NOT NULL
)