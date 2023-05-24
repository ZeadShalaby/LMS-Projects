import createStaff from "../models/createStaff.js";
import addSubject from "../models/addSubject.js";
import bcrypt from 'bcryptjs';

// systemUser Route

export const savestaff = async (req, res) => {
    const { first_name, last_name, username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt)
    await createStaff.create({
        first_name,
        last_name,
        username,
        password: encryptedPassword
    })
    res.redirect("/admin/createStaff")
}

export const createstaff = async (req, res) => {
    res.render("createStaffAcount",
        {
            title: 'Create Staff', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const showstaffs = async (req, res) => {
    const staffs = await createStaff.find().lean();
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
    res.render("editStaffs",
        {
            editStaff, title: 'Edit Staff', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const updateStaff = async (req, res) => {
    const { first_name, last_name, username, password } = req.body;
    const { _id } = req.params;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt)
    await createStaff.findByIdAndUpdate(_id, {
        $set: {
            first_name,
            last_name,
            username,
            password: encryptedPassword

        }
    })
    res.redirect("/admin/staffs")
}

export const deleteStaff = async (req, res) => {
    const { _id } = req.params;
    await createStaff.findByIdAndDelete(_id);
    return res.redirect("/admin/staffs");
}


// staff Route

export const homeStaff = async (req, res) => {
    const subjects = await addSubject.find({ staff: req.staffUser._id }).populate('staff').lean()
    res.render("staff",
        {
            subjects, title: 'Home', home: '/staff',
            display5: 'd-none', display1: 'd-none', display2: 'd-none', display3: 'd-none', display4: 'd-none',
        })
}

export const subjectInfo = async (req, res) => {
    const subjects = await addSubject.find({ staff: req.staffUser._id }).populate('staff').lean()
    res.render("subjectInfo",
        {
            subjects, title: 'Subject', home: '/staff',
            display5: 'd-none', display1: 'd-none', display2: 'd-none', display3: 'd-none', display4: 'd-none',
        })
}