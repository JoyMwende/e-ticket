create procedure createStaff(
@staff_id VarChar(255),
@full_name Varchar(max),
@station_id VarChar(max),
@occupation VarChar(max),
@email VarChar(max),
@phone_number VarChar(13),
@pass Varchar(max),
@isAdmin Int,
@isDeleted INT)

as begin 
INSERT into staffs(staff_id,full_name,station_id,occupation,email,phone_number,pass, isAdmin, isDeleted)
VALUES(@staff_id,@full_name,@station_id,@occupation,@email,@phone_number,@pass,@isAdmin,@isDeleted)
end

select * from staffs;







