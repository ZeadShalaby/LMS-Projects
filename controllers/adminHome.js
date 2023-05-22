export const admin = (req, res) => {
    res.render("systemUser",
        {
            title: 'Home', home: '/admin',
            list1: 'Departments', list101: 'Add Department', list102: 'Show Departments', link101: '/admin/AddDepartment', link102: '/admin/Departments',
            list2: 'Subjects', list201: 'Add subject', list202: 'Show Subjects', link201: '/admin/AddSubject', link202: '/admin/Subjects',
            list3: 'Staffs', list301: 'Create Staff', list302: 'Show Staffs', link301: '/admin/createStaff', link302: '/admin/Staffs',
            list4: 'Students', list401: 'Create Student', list402: 'Show Students', link401: '/admin/createStudent', link402: '/admin/Students',
            list5: 'Admins', list501: 'Add Admin', list502: 'Show Admins', link501: '/admin/addAdmin', link502: '/admin/admins',
        })
}