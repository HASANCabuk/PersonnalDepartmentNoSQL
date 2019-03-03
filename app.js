const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const sett=require("./helpers/settings");

const db = require("./dbConnect"); 

const depController=require("./routes/DepartmentController");
const perController=require("./routes/PersonnalController");
const usController=require("./routes/UserController");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use("/department",depController);
app.use("/personnal",perController);
app.use("/user",usController);
app.get('/',(req, res)=>{
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

app.listen(sett.webPort,()=>{
    console.log("Listening on port: "+sett.webPort);
});
