INSERT INTO Staff (SID, SName, STelephone, SPhoto)
VALUES
('7501', 'Sarinya', '089-352-7425', '7501.jpg'),
('7502', 'Kawin', '095-752-8531', '7502.jpg'),
('7503', 'Isara', '086-254-3597', '7503.jpg'),
('7504', 'Tanrada', '094-234-3521', '7504.jpg');

INSERT INTO Customer (CID, CName, CTelephone, CSex)
VALUES
('1002', 'Chutima', '084-352-6578', 'M'),
('1003', 'Pathompong', '084-733-0422', 'F'),
('1004', 'Siwakorn', '092-958-6655', 'F'),
('1005', 'Thitipong', '089-744-5678', 'M');

INSERT INTO Products (PName, PPrice, Photo)
VALUES
('Garden tour', '150', 'GTour.jpg'),
('Boat tour', '350', 'BTour.jpg'),
('Lunch', '75', 'Lunch.jpg'),
('Dinner', '200', 'Dinner.jpg');

INSERT INTO Booking (CID,GTour,TTour,Lunch,Dinner,date)
VALUES
('1002','1','1','1','1', '2020-10-12'),
('1005','1','0','1','0', '2020-10-13');