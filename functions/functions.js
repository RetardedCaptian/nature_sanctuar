const admin = require('../models/admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const q = require('../models/user_query')
const fs = require('fs/promises')
const images = require('../models/image')
const image = require('../models/image')
const { log } = require('console')
const path = require('path')
const adminFunctions = {
    getIdFromToken: async function (req, res, next) {
        try {
            let header = req.header('Authorization')
            let token = header.split(' ')[1]
            let dectoken = jwt.verify(token, process.env.JWTSECRET)
            req.id = dectoken.id
            next()
        } catch (error) {
            console.log(error.message);
            return { msg: 'token error', success: false }
        }
    },
    adminlogin: async (body) => {
        try {
            const isAdmin = await admin.findOne({ username: body.username })
            if (isAdmin !== null) {
                const isPassword = await bcrypt.compare(body.password, isAdmin.password)
                if (isPassword) {
                    const token = await jwt.sign({ id: isAdmin.id }, process.env.JWTSECRET)
                    console.log(token);
                    return { msg: 'logged in ', success: true, token: token }
                } else {
                    return { msg: 'credentials miss match', success: false, token: '' }
                }
            } else {
                return { msg: 'not an admin', success: false, token: '' }
            }
        } catch (error) {
            console.log(error);
            return { msg: 'database error', success: false, token: '' }
        }
    },
    loadUserQueries: async (id) => {
        try {
            if (id !== undefined || id !== null) {
                const isAdmin = await admin.findOne({ _id: id })
                if (isAdmin) {
                    const queries = await q.find()
                    console.log(queries);
                    return { success: true, msg: 'data found', data: queries }
                }
            } else {
                return { msg: 'no privilages', success: false, data: [] }
            }
        } catch (error) {
            console.log(error);
            return { msg: error.message, success: false, data: [] }
        }
    },
    deleteUserQueries: async (docId, id) => {
        try {
            if (id !== undefined || id !== null) {
                const isAdmin = await admin.findOne({ _id: id })
                if (isAdmin) {
                    const doc = await q.findOne({ _id: docId })
                    if (doc !== undefined || doc !== null) {
                        let del = await q.deleteOne({ _id: docId })
                        console.log(del);
                        return { success: true, msg: 'deleted' }
                    } else {
                        return { success: false, msg: 'not found' }
                    }
                }
            } else {
                return { msg: 'no privilages', success: false }
            }
        } catch (error) {
            console.log(error);
            return { msg: error.message, success: false }
        }
    },
    uploadGalleryImage: async (file) => {
        try {
            console.log(file);
            if (file !== undefined || file !== null) {
                const roomtype = file.originalname.split('-')[0]
                console.log(roomtype);
                const image = await adminFunctions.uploadToServer(file, roomtype)
                if (image.success == true) {
                    return { success: true, msg: 'upload successfull' }
                } else {
                    return { success: false, msg: 'upload failed' }

                }
            } else {
                return { success: false, msg: 'upload failed' }
            }
        } catch (error) {
            console.log(error);
            return { success: false, msg: 'upload failed' }
        }
    },
    uploadToServer: async (file, roomtype) => {
        try {
            const data = await fs.rename(`gallery/${file.filename}`, `gallery/${file.filename}.jpeg`)
            const files = await fs.open(`gallery/${file.filename}.jpeg`)
            if (files.fd !== undefined) {
                const md = new image({
                    imageName: file.filename,
                    roomtype: roomtype
                })
                const smd = await md.save()
                console.log(smd);
                if (smd.__v !== undefined) {
                    files.close()
                    return { success: true, msg: 'uploaded' }
                } else {
                    files.close()
                    return { success: false, msg: 'upload failed' }

                }
            }

        } catch (error) {
            console.log(error);
            return { success: false, msg: 'upload failed' }
        }
    },
    loadImagesfromServer: async (imageType) => {
        try {
            const data = await images.find({ roomtype: imageType })
            var rooms = []
            await Promise.all(data.map((e) => {
                // console.log(e);
                // rooms.push({ imageUrl: `https://naturesanctuary.in/api/loadImages/${e.imageName}` })
                rooms.push({ _id: e._id, imageUrl: `https://nature-sanctuary.onrender.com/api/loadImages/${e.imageName}` })
                // rooms.push({ _id: e._id, imageUrl: `http://192.168.43.46:2000/api/loadImages/${e.imageName}` })
            }))
            return {
                data: rooms,
                success: true,
                msg: 'fetch'
            }
        } catch (error) {
            console.log(error);
            return {
                data: [],
                success: false,
                msg: error.messge
            }
        }
    },
    deleteImages:async(id)=>{
        try {
            const image=await images.find({_id:id});
            const data=await images.deleteOne({ _id: id})
            const imagedelted=await adminFunctions.deleteImageFromServer(image[0].imageName)
            if(data.deletedCount===1){
                return {success:true,msg:"deleted"}
            }
            else{
                return {success:false,msg:"not deleted"}

            }
        } catch (error) {
            console.log(error);
            return {success:false,msg:"not deleted"}

        }
    },
    deleteImageFromServer:async(filename)=>{
        try {
            const file=await fs.unlink(path.join(__dirname,`../gallery/${filename}.jpeg`))
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = adminFunctions