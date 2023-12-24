const express = require("express")
const mongoose =  require("mongoose")
const authRouter = require("./routers/authRouter")

const PORT = process.env.PORT || 5000
const DB_URL = "mongodb+srv://user:1234@cluster0.wclamlv.mongodb.net/?retryWrites=true&w=majority"

const app = express()

app.use(express.json())
app.use("/auth", authRouter)
const start = async () => {
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
