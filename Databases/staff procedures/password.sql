create procedure password  (@email VarChar(max))

as begin
select password from staffs where email = @email
 end
