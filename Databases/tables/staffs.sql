CREATE TABLE staffs(staff_id VarChar(255) PRIMARY KEY  NOT NULL,
					full_name VarChar(max) NOT NULL,
					station_id VarChar(255) NOT NULL,
					occupation VarChar(max) NOT NULL,
					email Varchar(max) NOT NULL,
					phone_number VarChar(13) NOT NULL,
					pass VarChar(max) NOT NULL,
					isAdmin INT DEFAULT 0,
					isDeleted INT DEFAULT 0,
					foreign key (station_id) references station(station_id));

					select * from staffs
					select * from ticket

					

					
					 
					



					
					
					
					
					
					
					