create procedure getAStaff(
@staff_id VarChar(255)
)

as begin
select * from staffs WHERE staff_id=@staff_id and isDeleted = 0;
end



