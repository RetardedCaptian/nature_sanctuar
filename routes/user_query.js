const router=require('express').Router();
const queryModel=require('../models/user_query')

router.post('/postqueries',async(req,res)=>{
    try {
        console.log(req.body);
        const query=new queryModel(req.body)
        const savedQuery=await query.save()
        if(savedQuery.__v!==undefined){
            return res.json({success:true,msg:'posted'})
        }else{
            return res.json({success:false,msg:'unsuccessfull'})
        }
    } catch (error) {
        console.log(error);
        return res.json({success:false,msg:'unsuccessfull'})
    }
})

router.get('/postedqueries',async(req,res)=>{
    try {
        const savedQuery=await queryModel.find()
        console.log(savedQuery);
    } catch (error) {
        console.log(error.message);
    }
})
module.exports=router