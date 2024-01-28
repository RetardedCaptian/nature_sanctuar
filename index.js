const express=require('express')
const app = express()
const morgan = require('morgan')
const db = require('./db/db')
const cors=require('cors')
const postQuery=require('./routes/user_query')
const login=require('./routes/user_login')
const q=require('./routes/admin/admin_routes')
const path=require('path')
require('dotenv').config()
app.use(morgan('tiny'))
app.use(express.static('web'))
app.use('/admin',express.static('web2'))
app.use(express.json())
app.use(cors({}))
const port = process.env.PORT || 2000
app.get('/',async(req,res)=>{
    res.sendFile(path.join(__dirname,'/web/index.html'))
})

app.use('/api',postQuery)
app.use('/api',login)
app.use('/api',q)
db().then(() => {
    app.listen(port,'0.0.0.0',() => {
        console.log(`listening on port ${port}`);
    })
})