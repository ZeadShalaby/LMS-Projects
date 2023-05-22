import { Router } from "express";

const router = new Router();

router.get('/', (req, res) => {
    res.render("student", { title: 'Home', home: '/student' })
})

export default router;