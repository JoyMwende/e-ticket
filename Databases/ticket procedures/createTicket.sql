create procedure createTicket(
@id VarChar(255),
@staff_id Varchar(max),
@machine_id VarChar(max),
@station_id VarChar(max),
@description VarChar(max),
@status VarChar(max),
@updated_at VarChar(255),
@isDeleted Int)

as begin
INSERT INTO ticket(id, staff_id, machine_id, station_id, description, status, updated_at, isDeleted)
VALUES(@id, @staff_id, @machine_id, @station_id, @description, @status, @updated_at, @isDeleted)
end

select * from ticket;



