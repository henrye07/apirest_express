const { User } = require('../database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = require('express').Router()

router.post('/register',async (req,res)=>{
    try {
        req.body.password = bcrypt.hashSync(req.body.password,10)
        const user = await User.create(req.body)
        res.json(user)
        // res.json({msg:'OK'})
        // res.json(req.body)
        
    } catch (er) {
        console.log(er)
        res.status(500).json({error:'Error en BBDD'})
    }
})

router.post('/login',async (req,res)=>{
    const user = await User.findOne({where:{email:req.body.email}})
    if (user) {
        const password_valid= await bcrypt.compare(req.body.password, user.password)
        if (password_valid) {
            const token = jwt.sign({
                id: user.id,
                username: user.username
            },'mi-secreto',{expiresIn: 60 * 15})

            res.json({token})

        } else {
            res.status(401).json({error:'Credenciales Invalidas'})
        }
    } else {
        res.status(401).json({error:'No existe el Email'})
    }
})

module.exports=router