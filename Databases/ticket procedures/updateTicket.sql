create procedure updateTicket(
@staff_id VarChar(255),
@machine_id VarChar(max),
@station_id VarChar(max),
@description VarChar(max),
@status VarChar(255),
@isDeleted Int,
@id VarChar(255))

as begin
UPDATE ticket SET staff_id=@staff_id, machine_id=@machine_id, station_id=@station_id,
					description=@description, status=@status,
					isDeleted=@isDeleted
		WHERE id=@id
end

