import Jwt from "jsonwebtoken";

export const adminAccessLogin = (req, res, next) => {
    const { adminToken } = req.cookies;
    try {
        const userInformations = Jwt.verify(adminToken, 'adrmy')
        // console.log(userInformations);
        next();
    } catch (err) {
        return res.send('<h1>Bad Informations</h1>')
    }
}

export const staffAccessLogin = (req, res, next) => {
    const { staffToken } = req.cookies;
    try {
        const userInformations = Jwt.verify(staffToken, 'adrmy')
        // console.log(userInformations);
        next();
    } catch (err) {
        return res.send('<h1>Bad Informations</h1>')
    }
}

export const studentAccessLogin = (req, res, next) => {
    const { studentToken } = req.cookies;
    try {
        const userInformations = Jwt.verify(studentToken, 'adrmy')
        // console.log(userInformations);
        next();
    } catch (err) {
        return res.send('<h1>Bad Informations</h1>')
    }
}