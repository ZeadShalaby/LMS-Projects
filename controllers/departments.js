import addDepartment from "../models/addDepartment.js";

export const savedept = async (req, res) => {
    const { name, code } = req.body;
    await addDepartment.create({
        name,
        code
    })
    res.redirect("/admin/addDepartment")
}

export const addDepartments = (req, res) => {
    res.render("AddDepartment",
        {
            title: 'Add Department', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const showdepartments = async (req, res) => {
    const departments = await addDepartment.find().lean();
    res.render("showDepartments",
        {
            departments, title: 'Departments', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const editDepartment = async (req, res) => {
    const { _id } = req.params;
    const editDept = await addDepartment.findById(_id).lean();
    // const departments = await addDepartment.find().lean();
    res.render("editDepartments",
        {
            editDept, title: 'Edit Department', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const updateDepartment = async (req, res) => {
    const { name, code } = req.body;
    const { _id } = req.params;
    await addDepartment.findByIdAndUpdate(_id, {
        $set: {
            name,
            code
        }
    })
    res.redirect("/admin/departments")
}

export const deleteDepartment = async (req, res) => {
    const { _id } = req.params;
    await addDepartment.findByIdAndDelete(_id);
    return res.redirect("/admin/departments");
}