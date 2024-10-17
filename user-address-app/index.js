const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app= express();

app.use(bodyParser.json())

app.use('./api',userRoutes);

const PORT = process.env.PORT || 8799;
sequelize.sync({force:true}).then(()=>{
    console.log('Database synced...');
    app.listen(PORT,()=>{
        console.log(`Sever running on port ${PORT}`);
    })
})