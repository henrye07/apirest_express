const express = require('express')
const { checkToken } = require('./middleware/checkToken')
const app=express()

require('./database')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',checkToken,(req,res)=>{
    res.send('OK')
})

app.use('/api/users',require('./routes/users'))
app.use('/api/categorias',require('./routes/categorias'))

app.listen(3000, error=>{
    console.log('*:3000')
})