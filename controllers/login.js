import addAdmin from "../models/addAdmin.js";
import createStaff from "../models/createStaff.js";
import createStudent from "../models/createStudent.js";
import bcrypt from 'bcryptjs';
import Jwt from "jsonwebtoken";
// import jsdom from "jsdom";
// const { JSDOM } = jsdom;

// const dom = new JSDOM(``);
// const document = dom.window.document;
export const login = async (req, res) => {
    const { username, password } = req.body;
    const selectedOption = req.body.option;
    // console.log('Option selected:', selectedOption);
    if (selectedOption == "systemUser") {
        const adminUser = await addAdmin.findOne({ username })
        const adminPassword = bcrypt.compareSync(password, adminUser.password)
        if (adminPassword) {
            const adminData = {
                _id: adminUser._id,
                username: adminUser.username,
                first_name: adminUser.first_name,
                last_name: adminUser.last_name
            }
            const jwtToken = Jwt.sign(adminData, 'adrmy')


            res.cookie('adminToken', jwtToken);
            res.redirect('/admin')
        }
    } else if (selectedOption == "staff") {
        const staffUser = await createStaff.findOne({ username });
        const staffPassword = bcrypt.compareSync(password, staffUser.password)
        if (staffPassword) {
            const staffData = {
                _id: staffUser._id,
                username: staffUser.username,
                first_name: staffUser.first_name,
                last_name: staffUser.last_name
            }
            const jwtToken = Jwt.sign(staffData, 'adrmy')
            res.cookie('staffToken', jwtToken)
            res.redirect('/staff')
        }
    } else if (selectedOption == "student") {
        const studentUser = await createStudent.findOne({ username });
        const studentPassword = bcrypt.compareSync(password, studentUser.password)
        if (studentPassword) {
            const studentData = {
                _id: studentUser._id,
                username: studentUser.username,
                first_name: studentUser.first_name,
                last_name: studentUser.last_name
            }
            const jwtToken = Jwt.sign(studentData, 'adrmy')
            res.cookie('studentToken', jwtToken)
            res.redirect('/student')
        }
    }
}