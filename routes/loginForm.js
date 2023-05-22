import { Router } from "express";
import { login } from "../controllers/login.js";

const router = new Router();

router.get('/', (req, res) => {
    res.render("index", { layout: false })
})

router.post('/', login)


export default router;