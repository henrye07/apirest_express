module.exports= (sequelize, DataTypes)=>{
    return sequelize.define('users',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        username: DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })
}