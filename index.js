const express=require('express')
const app = express()
const morgan = require('morgan')
const db = require('./db/db')
const cors=require('cors')
const postQuery=require('./routes/user_query')
require('dotenv').config()

app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 2000
app.use('/api',postQuery)
db().then(() => {
    app.listen(port,'0.0.0.0',() => {
        console.log(`listening on port ${port}`);
    })
})