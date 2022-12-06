create procedure getStaffs

as begin
select * from staffs where isDeleted = 0;
end

