import expenseSchema from "../models/expenseSchema.js";

export const addExpense =async(req,res)=>{
    try {
            const {title,amount,category}=req.body;
            const newExpress=await expenseSchema.create({
                title:title,
                amount:amount,
                category:category,
            });
            res.json({success:true,message:"New entry added"})
        } catch (error) {
        console.log(error);
        res.json({success:false,message:"some internal eorro"})
    };
};
export const getExpense =async(req,res)=>{
    try {
        const allExpense = await expenseSchema.find();
        res.json({success:true,expenses:allExpense});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"some internal eorro"})
    };
};
export const deleteExpense =async(req,res)=>{
    try {
         const expense=await expenseSchema.findById(req.params.id);
         if (!expense) {
            res.json({success:false,message:"entry not found!"})
         } else {
            await expenseSchema.findByIdAndDelete(req.params.id);
            res.json({success:true,message:"entry deleted!"});
         }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"some internal eorro"})
    };
};
export const updateExpense =async(req,res)=>{
    try {
        const expense=await expenseSchema.findById(req.params.id);
        if (!expense) {
            res.json({success:false,message:"Entry not found!"});
        } else {
            const modifiedExpense = {};
            const {title,amount,category} = req.body;
            if(title)modifiedExpense.title=title;
            if(amount)modifiedExpense.amount=amount;
            if(category)modifiedExpense.category=category;
            await expenseSchema.findByIdAndUpdate(req.params.id,modifiedExpense)
            res.json({success:true,message:"Entry updated!"});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"some internal eorro"})
    };
};
export const singleExpense =async(req,res)=>{
    try {
        const expense=await expenseSchema.findById(req.params.id);
        res.json({success:true,expenseDetails:expense})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"some internal eorro"})
    };
};