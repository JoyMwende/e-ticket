const express = require("express")
const cors = require("cors")
const app = express()
const mssql = require("mssql")
const config = require("./config/config")
app.use(cors())
app.use(express.json())
const auth = require("./Middlewares/Auth")
const setRange = require("./Middlewares/range")

app.post("/welcome", auth, (req,res) => {
    res.status(200).send("Welcome!")
})

app.use(setRange)

app.use('/staffs', require('./Routes/staffRouter'))
app.use('/ticket', require("./Routes/ticketRouter"))

mssql.connect(config).then(pool => {
    if(pool.connecting){
        console.log("Database Connecting...");
    }
    if(pool.connected){
        console.log("Connection Successful!");
    }
}).catch(e => console.log(e))

const port = 9000;
app.listen(port, () =>
    console.log("Express server running...")
);