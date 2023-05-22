import createStaff from "../models/createStaff.js";
import addSubject from "../models/addSubject.js";
import bcrypt from 'bcryptjs';

export const savestaff = async (req, res) => {
    const { first_name, last_name, username, password, subject1, subject2, subject3 } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt)
    await createStaff.create({
        first_name,
        last_name,
        username,
        password: encryptedPassword,
        subject1,
        subject2,
        subject3,
    })
    res.redirect("/admin/createStaff")
}

export const createstaff = async (req, res) => {
    const subjects = await addSubject.find().lean()
    res.render("createStaffAcount",
        {
            subjects, title: 'Create Staff', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const showstaffs = async (req, res) => {
    const staffs = await createStaff.find().populate('subject1').populate('subject2').populate('subject3').lean();
    res.render("showStaffs",
        {
            staffs, title: 'Staffs', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const editStaff = async (req, res) => {
    const { _id } = req.params;
    const editStaff = await createStaff.findById(_id).lean();
    const subjects = await addSubject.find().lean()
    res.render("editStaffs",
        {
            subjects, editStaff, title: 'Edit Staff', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const updateStaff = async (req, res) => {
    const { first_name, last_name, username, password, subject1, subject2, subject3 } = req.body;
    const { _id } = req.params;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt)
    await createStaff.findByIdAndUpdate(_id, {
        $set: {
            first_name,
            last_name,
            username,
            password: encryptedPassword,
            subject1,
            subject2,
            subject3

        }
    })
    res.redirect("/admin/staffs")
}

export const deleteStaff = async (req, res) => {
    const { _id } = req.params;
    await createStaff.findByIdAndDelete(_id);
    return res.redirect("/admin/staffs");
}