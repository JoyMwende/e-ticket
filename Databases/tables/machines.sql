create table machines(machine_id  VarChar(255) PRIMARY KEY NOT NULL,
					 machine_name VarChar(max) NOT NULL,
					 date_of_manufacture VarChar(255) NOT NULL,
					 date_of_purchase VarChar(255) NOT NULL,
					 station_id VarChar(255),
					 warranty VarChar(max) NOT NULL,
					 foreign key (station_id) references station(station_id));

					select * from machines

			