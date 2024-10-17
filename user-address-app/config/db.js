const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('nodesequlize_db','root','GaneshReddy',{
    host:'localhost',
    dialect:'mysql',
});

sequelize.authenticate()
.then(()=> console.log('Database connected..'))
.catch(err=> console.log('Error: '+err));

module.exports=sequelize;