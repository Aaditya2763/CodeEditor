const mongoose=require('mongoose')


const dbConnect= async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
        })
        console.log("DB Connected Successfully");
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
}
module.exports=dbConnect;