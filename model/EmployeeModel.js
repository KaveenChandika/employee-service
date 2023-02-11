const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:false
    },
    number:{
        type:Number
    },
    gender:{
        type:String
    },
    id:{
        type:Number
    },
    photo:{
        type:String
    }
});

const Employee = mongoose.model("employees", EmployeeSchema);

module.exports = Employee;