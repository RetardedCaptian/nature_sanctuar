const router = require('express').Router();
const adminFunctions = require('../functions/functions');
const queryModel = require('../models/user_query')
const path=require('path')
router.post('/postqueries', async (req, res) => {
    try {
        console.log(req.body);
        const query = new queryModel(req.body)
        const savedQuery = await query.save()
        if (savedQuery.__v !== undefined) {
            return res.json({ success: true, msg: 'posted' })
        } else {
            return res.json({ success: false, msg: 'unsuccessfull' })
        }
    } catch (error) {
        console.log(error);
        return res.json({ success: false, msg: 'unsuccessfull' })
    }
})

router.get('/postedqueries', async (req, res) => {
    try {
        const savedQuery = await queryModel.find()
        console.log(savedQuery);
    } catch (error) {
        console.log(error.message);
    }
})

router.get('/loadimage',async(req,res)=>{
    try {
        const data=await adminFunctions.loadImagesfromServer()
        return res.json(data)
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            msg:error.message,
            leftImage:[],
            rightImage:[]
        })
    }
})

router.get('/loadImages/:imageName', async (req, res) => {
    try {
        console.log(__dirname);
        return res.sendFile(path.join(__dirname,`../gallery/${req.params.imageName}.jpeg`))
    } catch (error) {
        console.log(error);
    }
})  
module.exports = router