const router=require('express').Router();
const af=require('../../functions/functions')
const multer=require('multer')
const storage=multer({dest:'gallery'})
router.get('/loadqueries',af.getIdFromToken,async(req,res)=>{
    try {
        console.log(req.id);
        const data=await af.loadUserQueries(req.id)
        console.log(data);
        return res.json(data)
    } catch (error) {
        return res.json({success:false,msg:error.message,data:[]})
    }
})

router.delete('/deletedoc',af.getIdFromToken,async(req,res)=>{
    try {
        const data=await af.deleteUserQueries(req.body.docId,req.id)
        console.log(data);
        return res.json(data)
    } catch (error) {
        return res.json({success:false,msg:error.message})
    }
})

router.post('/upload',af.getIdFromToken,storage.array('image'),async(req,res)=>{
    try {
        console.log(req.files);
        const data=await af.uploadGalleryImage(req.files)
        console.log(data);
        return res.json(data)
    } catch (error) {
        console.log(error);
        return res.json({success:false,msg:'failed'})
    }
})
module.exports =router