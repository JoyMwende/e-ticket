const mssql = require("mssql");
const config = require("../config/config");
const { v4: uuidv4 } = require("uuid");
const { validateTicket } = require("../Helpers/validation");

//create a ticket
async function createTicket (req, res) {
  const {id, staff_id, machine_id, station_id, description, status, updated_at, isDeleted} = req.body;
  const { error } = validateTicket.validate(req.body);
  if (error)
    return res
      .status(400)
      .send({ success: false, message: error.details[0].message });

  try {
    let pool = await mssql.connect(config);
    await pool
      .request()
      .input("id", uuidv4(id))
      .input("staff_id", mssql.VarChar, staff_id)
      .input("machine_id", mssql.VarChar, machine_id)
      .input("station_id", mssql.VarChar, station_id)
      .input("status", mssql.VarChar, status)
      .input("updated_at", mssql.VarChar, updated_at)
      .input("description", mssql.VarChar, description)
      .input("isDeleted", isDeleted)
      .execute("createTicket");
    res.send({ success: true });
  } catch (err) {
    console.log(err);
  }
}
//get filed tickets
async function getTickets(req, res) {
  try {
    await mssql.connect(config);
    const results = await new mssql.Request().execute("getTickets");
    res.send(results.recordset);
    console.log(results.recordset);
  } catch (err) {
    console.log(err);
  }
}

//get a ticket
async function getATicket(req, res) {
  const id = req.params.id;
  try {
    let pool = await mssql.connect(config);
    let results = await pool.request().input("id", id).execute("getATicket");
    res.json(results);
  } catch (err) {
    console.log(err);
  }
}
//admin update status
async function updateStatus(req,res) {
const {status,id} =req.body
  try {
    // let pool= await mssql.connect(config)
    // await pool.request()
    // .input("status",mssql.VarChar, status)
    // .input("id", mssql.VarChar,id)
    // .execute(updateStatus)
  } catch (error) {
    
  }
}

//update a filed ticket
async function updateTicket(req, res) {
  const id = req.params.id;
  const {staff_id, machine_id, station_id, description, isDeleted } = req.body;
  try {
    let pool = await mssql.connect(config);
    await pool
      .request()
      .input("id", mssql.VarChar, id)
      .input("staff_id", mssql.VarChar, staff_id)
      .input("machine_id", mssql.VarChar, machine_id)
      .input("station_id", mssql.VarChar, station_id)
      .input("description", mssql.VarChar, description)
      .input("isDeleted", isDeleted)
      .execute("updateTicket");
    res.json("You have successfully updated a ticket!");
  } catch (err) {
    console.log(err);
  }
}

//delete a filed ticket
async function deleteTicket(req, res) {
  const id = req.params.id;
  try {
    let pool = await mssql.connect(config);
    let answ = await pool
      .request()
      .input("id", mssql.VarChar, id)
      .execute("deleteTicket");
    res.send("Ticket cancelled!");
  } catch (err) {
    console.log(err);
  }
}
async function deleteAllTickets(req, res) {
  try {
    await mssql.connect(config);
    const results = await new mssql.Request().execute("deleteAllTickets");
    res.send("Tickets Deleted!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {createTicket, getATicket, getTickets, updateTicket, deleteTicket, deleteAllTickets, updateStatus}

