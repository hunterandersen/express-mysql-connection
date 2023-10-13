import express from "express";
import employeeRouter from "./employees.route";

const router = express.Router();

router.use("/employees", employeeRouter);

router.get("/test", (req, res) => {
  res.send("working");
});

export default router;
