const express=require('express');
const bcrypt=require('bcrypt');
const User=require('../models/user');

const router=express.Router()

router.post('/signup',async(req,res)=>{
    const {email,password}=req.body;
    if(!email.includes('@')){
        return res.json({message:'Invalid email'});
    }
    const existingUser = await User.findOne({ email });
    if(existingUser){
        return res.json({message: "User already exists"});
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const user=new User({
        email:email,
        password:hashedPassword
    });
    await user.save();
    res.json({message:'User Registered'});
});
router.post('/signin',async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email:email});
    if(!user){
        return res.status(400).json({message:'email not found'});
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.json({message:"wrong password"});
    }
    res.json({message:"login success",userid:user._id});
});
module.exports=router