const mongoose=require('mongoose')

var Schema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    }
    
})
const camptable=mongoose.model('camptable', Schema)
module.exports=camptable;
