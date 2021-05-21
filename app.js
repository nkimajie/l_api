const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//load database
const sequelize = require('./util/database');

//import route
const postRoutes = require('./routes/route');

//setting static folder
app.use(bodyParser.urlencoded({ extended:false }));

//import model
const postModel = require('./models/post');

app.use(postRoutes);

sequelize.sync()
        .then(link => {
            app.listen(3000, console.log('runnig on port 3000'));
        })
        .catch(err => {
            console.log(err);
        })

