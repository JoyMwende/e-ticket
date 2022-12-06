const mssql = require('mssql')
const config = require('../config/config')
const { v4: uuidv4 } = require("uuid")
const bcrypt = require("bcrypt");
const { ValidationLogin, validateStaffs } = require('../Helpers/validation');

//Register Staff
async function createStaff(req,res) {
    const {staff_id, full_name, station_id, occupation, email, phone_number, pass, isAdmin, isDeleted} = req.body;
    const { error } = validateStaffs.validate(req.body);
    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    const salt = await bcrypt.genSalt(10);
    const hashedpass = await bcrypt.hash(pass, salt)
    console.log(hashedpass);

    try {
        let pool = await mssql.connect(config);
        await pool
          .request()
          .input("staff_id", uuidv4(staff_id))
          .input("full_name", full_name)
          .input("station_id", station_id)
          .input("occupation", occupation)
          .input("email", email)
          .input("phone_number", phone_number)
          .input("pass", hashedpass)
          .input("isAdmin", isAdmin)
          .input("isDeleted", isDeleted)
          .execute("createStaff");
    res.json({success: true})
    // console.log("Registration successful!");
    } catch (err) {
        console.log(err);
        res.json({status: false})
    }
}

//login staff
async function loginStaff(req, res) {
    const { email, phone_number } = req.body;
    const {error} = ValidationLogin.validate(req.body)
    if (error)
        return res
            .status(400)
            .send({success: false, message: error.details[0].message})
    try {
        let pool = await mssql.connect(config)
        let { recordset } = await pool
          .request()
          // const hashedpassword = await pool
          .input("email", email)
          .input("phone_number", phone_number)
          .execute("loginStaff");
        //res.json("Login successful!")
        const staffs = recordset[0];
    //if(!staffs) res.status(400).send({message: "staff not found"})
    
    //const match = await bcrypt.compare( pass, staffs.pass)
    //if(!match) res.status(400).send('invalid')
    // if (match) {
    //     console.log("Password matched");
        res.send(staffs)
    // } else {
    //     console.log("Password does not match");
    // }
    } catch (err) {
        console.log(err);
    }
}

//get a staff
async function getAStaff (req, res) {
    const staff_id = req.params.id;
    try{
        let pool = await mssql.connect(config)
        let result = await pool
        .request()
        .input("staff_id", staff_id)
        .execute("getAStaff");
    res.send(result.recordset);
    } catch (err) {
        console.log(err);
    }
}

//get all staffs
async function getStaffs(req, res) {
    try {
        await mssql.connect(config)
        const result = await new mssql.Request().execute("getStaffs")
        res.send(result.recordset)
    } catch (err) {
        console.log(err);
    }
}

//update staffs
async function updateStaff(req, res) {
    const staff_id = req.params.id;
    const {full_name, station_id, occupation, email, phone_number,pass,isAdmin,isDeleted} = req.body
    try{
        let pool = await mssql.connect(config)
        await pool
          .request()
          .input("staff_id", uuidv4(staff_id))
          .input("full_name", full_name)
          .input("station_id", station_id)
          .input("occupation", occupation)
          .input("email", email)
          .input("phone_number", phone_number)
          .input("pass", pass)
          .input("isAdmin", isAdmin)
          .input("isDeleted", isDeleted)
          .execute("updateStaff");
        res.json("Staff Updated!")
    } catch (err) {
        console.log(err);
    }
}

//delete staff
async function deleteStaff (req, res) {
    const staff_id = req.params.id;
    try {
        let pool = await mssql.connect(config)
        let result = await pool
        .request()
        .input("staff_id", mssql.VarChar, staff_id)
        .execute("deleteStaff")
        res.send("One staff deleted!")
    } catch (err) {
        console.log(err);
    }
}

module.exports = {createStaff,loginStaff,getAStaff,getStaffs,updateStaff,deleteStaff}