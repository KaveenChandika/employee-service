const EmployeeModel = require("../model/EmployeeModel");

module.exports = {
    getEmployees: async (req,res) =>{
        try{
            const employees = await EmployeeModel.find();
            res.send(employees);
            res.status(200)
        }catch(e){
            res.send(e);
            res.status(404)
        }
    },
    getEmployeeById: async (req,res) =>{
        let id = req.params.id
        try{
            const employee = await EmployeeModel.findById({_id:id});
            res.send(employee);
            res.status(200)
        }catch(e){
            res.send(e);
            res.status(404)
        }
    },
    addEmployees:async (req,res) =>{
        try{
            const employee = new EmployeeModel(req.body);
            await employee.save();
            res.send(employee);
        }catch(e){
            res.send(e);
        }
    },
    updateEmployee:async (req,res) =>{
        try{
            const employeeUpdate = await EmployeeModel.findOneAndUpdate(
                {_id:req.params.empId},
                req.body
            )
            res.send(employeeUpdate)
        }catch(e){
            res.send(e);
        }
    },
    deleteEmployee: async (req,res) =>{
        try{
            const employeeDelete = await EmployeeModel.deleteOne( {_id:req.params.empId})
            res.send(employeeDelete);
        }catch(e){
            res.send(e);
        }
    }
}