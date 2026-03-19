const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    title:String,
    userid:String
});
module.exports=mongoose.model('Task',taskSchema);