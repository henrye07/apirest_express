const {Sequelize, DataTypes}= require('sequelize')
// const sql= require('mysql2')

const sequelize = new Sequelize('apirest_express','root','',{
    'host':'localhost',
    'dialect':'mysql'
})

const User = require('./models/user')(sequelize, DataTypes)


sequelize.sync()
                .then(()=>{console.log('Sync')})
                .catch(e =>{console.log(e)})


module.exports={
    User
}