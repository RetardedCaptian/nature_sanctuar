const mongoose=require('mongoose')

module.exports=async function(){
    try {
        const conn=await mongoose.connect(process.env.DBCONFIG)
        console.log(conn.connection.host);
    } catch (error) {
        console.log(error.message);
        return error
    }
}