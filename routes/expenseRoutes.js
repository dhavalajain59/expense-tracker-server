import express from "express";
import { addExpense, deleteExpense, getExpense,singleExpense, updateExpense } from "../controllers/expenseControllers.js";
const router= express.Router();
//hello 

router.post("/insert",addExpense);
router.get("/view-all",getExpense);
router.get("/view/:id",singleExpense);
router.put("/edit/:id",updateExpense);
router.delete("/delete/:id",deleteExpense);

export default router;
