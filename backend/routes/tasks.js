const express=require('express')
const Task=require('../models/task')
const router=express.Router()
router.post('/create',async(req,res)=>{
    const {title,userid}=req.body;
    const task=new Task({
        title,
        userid
    });
    await task.save();
    res.json(task);
});
router.get('/:userid',async(req,res)=>{
    const tasks=await Task.find({userid:req.params.userid});
    res.json(tasks);
});
router.delete('/delete/:id',async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({message:'Task Deleted'});
});
module.exports=router