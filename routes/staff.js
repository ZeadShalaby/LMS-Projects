import { Router } from "express";

const router = new Router();

router.get('/', (req, res) => {
    res.render("staff", { title: 'Home', home: '/staff' })
})

export default router;