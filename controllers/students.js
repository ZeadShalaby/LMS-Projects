import addDepartment from "../models/addDepartment.js";
import createStudent from "../models/createStudent.js";
import bcrypt from 'bcryptjs';

export const savestudent = async (req, res) => {
    const { first_name, last_name, academic_number, department, username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt)
    await createStudent.create({
        first_name,
        last_name,
        academic_number,
        department,
        username,
        password: encryptedPassword
    })


    res.redirect("/admin/createStudent")
}

export const createstudent = async (req, res) => {
    const departments = await addDepartment.find().lean();
    res.render("createStudentAccount",
        {
            departments, title: 'Create Student', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}


export const showstudents = async (req, res) => {
    const students = await createStudent.find().populate('department').lean();
    res.render("showStudents",
        {
            students, title: 'Students', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const editStudent = async (req, res) => {
    const { _id } = req.params;
    const editStudent = await createStudent.findById(_id).lean();
    const departments = await addDepartment.find().lean();
    res.render("editStudents",
        {
            departments, editStudent, title: 'Edit Student', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const updateStudent = async (req, res) => {
    const { first_name, last_name, academic_number, department, username, password } = req.body;
    const { _id } = req.params;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt)
    await createStudent.findByIdAndUpdate(_id, {
        $set: {
            first_name,
            last_name,
            academic_number,
            department,
            username,
            password: encryptedPassword
        }
    })
    res.redirect("/admin/students")
}

export const deleteStudent = async (req, res) => {
    const { _id } = req.params;
    await createStudent.findByIdAndDelete(_id);
    return res.redirect("/admin/students");
}