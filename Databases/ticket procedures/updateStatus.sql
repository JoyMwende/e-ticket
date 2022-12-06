create procedure updateStatus(
@id VarChar(255),
@status VarChar(255)
)

as begin
UPDATE ticket SET status=@status			
		WHERE id=@id
end


