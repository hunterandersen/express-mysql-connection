import express from "express";
import employeesController from "../controllers/employees.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    try {
        const { id } = req.params;

        let data;
        if (id) {
            //Ask the controller to get the one employee, with a matching id
            data = await employeesController.getOne(id);
        } else {
            //Ask the controller to get all the employees
            data = await employeesController.getAll();
        }

        res.json(data);
    } catch(err) {
        next(err);
    }
});

export default router;