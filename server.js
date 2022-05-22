const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect(
    "mongodb+srv://cisc4800todolist:cisc4800todolist@4800todolist.vtrzt.mongodb.net/CISC4800ToDoList?retryWrites=true&w=majority"
)

app.use('/', require("./routes/route"))

//require route

app.listen(3002, function() {
    console.log("express server is running on port 3002");
})