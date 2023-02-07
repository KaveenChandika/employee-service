const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
        minLength: 6,
        maxLength: 10
    },
    last_name:{
        type:String,
        required:true,
        minLength: 6,
        maxLength: 10
    },
    email:{
        type:String,
        required:true,
        unique:true
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