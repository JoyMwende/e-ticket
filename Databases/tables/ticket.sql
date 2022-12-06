CREATE TABLE ticket(id VarChar(255) PRIMARY KEY NOT NULL,
					staff_id VarChar(255) NOT NULL,
					machine_id VarChar(255) NOT NULL,
					station_id VarChar(255) NOT NULL,
					description VarChar(max) NOT NULL,
					updated_at VarChar(255),
					isDeleted Int DEFAULT 0,
					status VarChar(255) DEFAULT 'filed',
					foreign key (staff_id) references staffs(staff_id),
					foreign key (machine_id) references machines(machine_id),
					foreign key (station_id) references station(station_id));

					select * from ticket

				

					




					

				
				

					


					

					
					


					
				