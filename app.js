// const express = require('express')
import express from "express"
import { engine } from 'express-handlebars';
import mongoose from "mongoose";
import multer from "multer";
import dotenv from "dotenv";
import methodOverride from 'method-override';
import loginRouter from './routes/loginForm.js'
import adminRouter from './routes/systemUser.js'
import staffRouter from './routes/staff.js'
import cookieParser from "cookie-parser";
import { adminAccessLogin, staffAccessLogin, studentAccessLogin } from "./middleware/accessLogin.js";

dotenv.config();
mongoose.connect(process.env.DBConnection)

const app = express()
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(cookieParser())


app.get('/', (req, res) => {
    res.redirect("/login")
})

app.use('/login', loginRouter)
app.use('/admin', adminAccessLogin, adminRouter)
app.use('/staff', staffAccessLogin, staffRouter)
app.get('/student', studentAccessLogin, (req, res) => {
    res.render("student")
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${process.env.port}`)
})