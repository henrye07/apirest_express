const express = require('express')
const app=express()
const jwt = require('jsonwebtoken')
require('./database')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res,next)=>{
    let token = req.get('token')

    jwt.verify(token,'mi-secreto',(error,decode)=>{
        if (error) {
            return res.status(401).json({error})
        } 
        next()
    })



},(req,res)=>{
    res.send('OK')
})

app.use('/api/users',require('./routes/users'))

app.listen(3000, error=>{
    console.log('*:3000')
})