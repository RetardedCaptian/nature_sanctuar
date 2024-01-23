const router = require('express').Router();
const bcrypt = require('bcrypt')
const af=require('../functions/functions')
router.post('/login', async (req, res) => {
    try {
        // const salt =await bcrypt.genSalt(10)
        // const hsdpwd =await bcrypt.hash('naturesanctuaryadmin555', salt)
        // console.log({ username: 'naturesanctuary', password: hsdpwd })
        console.log(req.body);
        const admin=await af.adminlogin(req.body)
        console.log(admin);
        return res.json(admin)

    } catch (error) {
        console.log(error);
        return {
            msg:error.message,
            success:false,
            token:''
        }
    }
})

module.exports = router 