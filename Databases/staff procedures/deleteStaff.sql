create procedure deleteStaff(
@staff_id VarChar(255)
)

as begin
UPDATE staffs SET isDeleted = 1
				WHERE staff_id = @staff_id AND isDeleted = 0;
end



