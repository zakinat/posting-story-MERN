//importing dependencies
const path=require('path')
const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')

//importing functions
const connectDB=require('./config/db')

//Load config
dotenv.config({path:'./config/config.env'})

//connect database with mongo
connectDB()

//init server app
const app=express()

//bodyparser
app.use(bodyParser.json({limit:'30mb',extended:false}))
app.use(express.json({limit:'30mb',extended:false}))
app.use(cors())

//routes
app.use('/stories',require('./routes/stories'))
//deploying
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.resolve(__dirname, '../client/build')))
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname,'..','client','build','index.html')))
}

const PORT=process.env.PORT || 5000


app.listen(PORT,console.log(`server running in  mode on port ${PORT}`))