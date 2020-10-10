CREATE TABLE staff
(
   SID  int(10)NOT NULL,
   SName varchar(40)NOT NULL,
   STelephone varchar (20)NOT NULL,
   SPhoto varchar(10)NOT NULL
);

CREATE TABLE Customer 
(
   CID  int(10)NOT NULL,
   CName varchar(40)NOT NULL,
   CTelephone varchar (20)NOT NULL,
   CSex varchar(10)NOT NULL
   
);
CREATE TABLE Products
(
   PName varchar(40)not null,
   PPrice varchar (20)not null,
   Photo varchar(10)not null

);
CREATE TABLE Booking (
  CID VARCHAR(4) NOT NULL,
  GTour VARCHAR(1) NULL,
  TTour VARCHAR(1) NULL,
  Lunch VARCHAR(1) NULL,
  Dinner VARCHAR(1) NULL,
  Date DATETIME NULL,
  PRIMARY KEY (`CID`));
