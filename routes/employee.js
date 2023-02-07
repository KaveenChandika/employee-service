const express = require("express");
const router = express.Router();

const controller = require("../controller/EmployeeController");

router.get('/employee',controller.getEmployees);
router.post('/employee', controller.addEmployees)
router.put('/employee/:empId', controller.updateEmployee)
router.delete('/employee/:empId',controller.deleteEmployee)

module.exports = router;