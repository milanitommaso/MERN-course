const Employee = require('../model/Employee')

const getAllEmployees = async (req, res) => {
    const employees = await Employee.find();
    if (!employee) return res.status(204).json({'message': 'No employees found.'});
    res.json(employees);
}

const createNewEmployee = async (req, res) => {
    if(!req?.body?.firstname || !req?.body?.lastname){
        return res.status(400).json({'message': 'firstname and lastname are required'});
    }

    try{
        const result = await Employee.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updateEmployee = async (req, res) => {
    if(!req?.body?.id) {
        return res.status(400).json({'message': 'ID parameter is required'})
    }

    const employee = await Employee.findOne({_id: req.body.id}).exec();
    if (!employee){
        return res.status(204).json({'message': `no employee matched ID ${req.body.id}`});
    }
    if(req.body?.firstname) employee.firstname = req.body.firstname;
    if(req.body?.lastname) employee.lastname = req.body.lastname;
    const result = await employee.save();
    res.json(result);
}

const deleteEmployee = async (req, res) => {
    if(!req?.body?.id) {
        return res.status(400).json({'message': 'ID parameter is required'})
    }
    const employee = await Employee.findOne({_id: req.body.id}).exec();
    if (!employee){
        return res.status(204).json({'message': `no employee matched ID ${req.body.id}`});
    }
    const result = await employee.deleteOne({_id: req.body.id});
    res.json(data.employees);
}

const getEmployee = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({'message': 'ID parameter is required'})
    }
    const employee = await Employee.findOne({_id: req.params.id}).exec();
    if(!employee) {
        return res.status(204).json({'message': `no employee matched ID ${req.params.id}`});
    }
    res.json(employee)
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}