import dotenv from "dotenv"
import app from "./app.js"
dotenv.config({
    path:"./env"
})

import connectDB from "./db/db.js"

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000)
    console.log(`server is running at port ${process.env.PORT}`)
})
.catch(()=>{
    console.error("DB Connection failed")
})