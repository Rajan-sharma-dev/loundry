const express=require('express')
const app=express()

const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})


require("./database/connection_with_db") 









app.listen(process.env.PORT,()=>{
    console.log(`Server running at port no ${process.env.PORT}`)
})