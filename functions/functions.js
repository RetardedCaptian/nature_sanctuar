const admin = require('../models/admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const q = require('../models/user_query')
const fs = require('fs/promises')
const images = require('../models/image')
const image = require('../models/image')
const { log } = require('console')
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
    uploadGalleryImage: async (files) => {
        try {
            if (files !== undefined || files !== null) {
                if (files.length === 3) {
                    const file0 = files[0].originalname.split('-')[0]
                    const r1 = await adminFunctions.uploadToServer(files[0], file0)
                    const file1 = files[1].originalname.split('-')[0]
                    const r2 = await adminFunctions.uploadToServer(files[1], file1)
                    const file2 = files[2].originalname.split('-')[0]
                    const r3 = await adminFunctions.uploadToServer(files[2], file2)
                    if (r1.success === true || r2.success === true || r3.success == true) {
                        return {
                            msg: 'file uploaded', success: true
                        }
                    } else {
                        return {
                            msg: 'file uploaded', success: true
                        }
                    }
                }
                if (files.length === 2) {
                    const file0 = files[0].originalname.split('-')[0]
                    const r1 = await adminFunctions.uploadToServer(files[0], file0)
                    const file1 = files[1].originalname.split('-')[0]
                    const r2 = await adminFunctions.uploadToServer(files[1], file1)
                    if (r1.success === true || r2.success === true) {
                        return {
                            msg: 'file uploaded', success: true
                        }
                    } else {
                        return {
                            msg: 'file uploaded', success: true
                        }
                    }
                }
                if (files.length === 1) {
                    const file0 = files[0].originalname.split('-')[0]
                    const r1 = await adminFunctions.uploadToServer(files[0], file0)
                    if (r1.success === true) {
                        return {
                            msg: 'file uploaded', success: true
                        }
                    } else {
                        return {
                            msg: 'file uploaded', success: true
                        }
                    }
                }
            } else {
                return { success: false, msg: 'upload failed' }
            }
        } catch (error) {
            console.log(error);
            return { success: false, msg: 'upload failed' }
        }
    },
    uploadToServer: async (file, pos) => {
        try {
            const data = await fs.rename(`gallery/${file.filename}`, `gallery/${file.filename}.jpeg`)
            const files = await fs.open(`gallery/${file.filename}.jpeg`)
            if (files.fd !== undefined) {
                const md = new image({
                    imageName: file.filename,
                    imagePos: pos
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
    loadImagesfromServer: async () => {
        try {
            const data = await images.find()
            var leftImage = []
            var rightImage = []
            await Promise.all(data.map((e) => {
                console.log(e.imagePos);
                if (e.imagePos ===':L') {
                    leftImage.push({ imageUrl: `https://nature-sanctuary.onrender.com/api/loadImages/${e.imageName}` })
                } else if(e.imagePos==='R') {
                    rightImage.push({ imageUrl: `https://nature-sanctuary.onrender.com/api/loadImages/${e.imageName}` })
                }
            }))
            console.log(leftImage)
            console.log(rightImage)
            return {
                leftImage:leftImage,
                rightImage:rightImage,
                success:true,
                msg:'fetch'
            }
        } catch (error) {
            console.log(error);
            return {
                leftImage:[],
                rightImage:[],
                success:false,
                msg:error.messge
            }
        }
    }
}

module.exports = adminFunctions