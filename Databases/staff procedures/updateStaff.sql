create procedure updateStaff(
@staff_id VarChar(255),
@full_name VarChar(max),
@station_id VarChar(max),
@occupation VarChar(max),
@email VarChar(max),
@phone_number VarChar(13),
@pass VarChar(max),
@isAdmin INT,
@isDeleted INT)

as begin
UPDATE staffs SET full_name=@full_name, station_id=@station_id, occupation=@occupation,
				  email=@email, phone_number=@phone_number, pass=@pass,
				  isAdmin = @isAdmin, isDeleted = @isDeleted
		WHERE staff_id=@staff_id
end



