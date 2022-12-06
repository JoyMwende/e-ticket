create procedure loginStaff(
@email VarChar(max),
@phone_number VarChar(max)
)

AS BEGIN
SELECT * FROM staffs WHERE email =@email AND phone_number = @phone_number
END


