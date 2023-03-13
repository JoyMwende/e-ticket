create procedure getATicket(
@id VarChar(255)
)

as begin
select * from ticket where id=@id;
end



