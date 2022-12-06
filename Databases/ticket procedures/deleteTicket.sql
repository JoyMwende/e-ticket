create procedure deleteTicket(@id VarChar(255))

as begin
UPDATE ticket set isDeleted = 1
	where id = @id and isDeleted = 0;
end


