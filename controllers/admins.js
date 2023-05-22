import addAdmin from "../models/addAdmin.js";
import bcrypt from 'bcryptjs';

export const saveAdmin = async (req, res) => {
    const { first_name, last_name, username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt)
    await addAdmin.create({
        first_name,
        last_name,
        username,
        password: encryptedPassword
    })

    res.redirect("/admin/addAdmin")
}

export const AddAdmin = (req, res) => {
    res.render("AddAdmin",
        {
            title: 'Add Admin', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const showAdmins = async (req, res) => {
    const admins = await addAdmin.find().lean();
    res.render("showAdmins",
        {
            admins, title: 'Admins', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs', link303: '/admin/staffs/addSubject',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const editAdmin = async (req, res) => {
    const { _id } = req.params;
    const editAdmin = await addAdmin.findById(_id).lean();
    res.render("editAdmins",
        {
            editAdmin, title: 'Edit Admin', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const updateAdmin = async (req, res) => {
    const { first_name, last_name, username, password } = req.body;
    const { _id } = req.params;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt)
    await addAdmin.findByIdAndUpdate(_id, {
        $set: {
            first_name,
            last_name,
            username,
            password: encryptedPassword
        }
    })
    res.redirect("/admin/admins")
}

export const deleteAdmin = async (req, res) => {
    const { _id } = req.params;
    await addAdmin.findByIdAndDelete(_id);
    return res.redirect("/admin/admins");
}