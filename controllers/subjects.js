import addDepartment from "../models/addDepartment.js";
import addSubject from "../models/addSubject.js";

export const savesubject = async (req, res) => {
    const { name, code, department, previous_subject } = req.body;
    await addSubject.create({
        name,
        code,
        department,
        previous_subject
    })

    res.redirect("/admin/addSubject")
}

export const addsubject = async (req, res) => {
    const departments = await addDepartment.find().lean();
    const subjects = await addSubject.find().lean();
    res.render("AddSubject",
        {
            subjects, departments, title: 'Add Subject', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const showsubject = async (req, res) => {
    const subjects = await addSubject.find().populate('previous_subject').populate('department').lean();
    res.render("showSubjects",
        {
            subjects, title: 'Subjects', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const editsubject = async (req, res) => {
    const { _id } = req.params;
    const editSub = await addSubject.findById(_id).lean();
    const departments = await addDepartment.find().lean();
    const subjects = await addSubject.find().lean();
    res.render("editSubjects",
        {
            subjects, departments, editSub, title: 'Edit Subject', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', list303: 'Add Subject', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}

export const updateSubject = async (req, res) => {
    const { name, code, department, previous_subject } = req.body;
    const { _id } = req.params;
    await addSubject.findByIdAndUpdate(_id, {
        $set: {
            name,
            code,
            department,
            previous_subject
        }
    })
    res.redirect("/admin/subjects")
}

export const deleteSubject = async (req, res) => {
    const { _id } = req.params;
    await addSubject.findByIdAndDelete(_id);
    return res.redirect("/admin/subjects");
}