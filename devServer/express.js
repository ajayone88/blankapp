const express = require('express');
const path = require('path');
const chalk = require('chalk');
const app = express();
const port = process.env.PORT;

const staticContent = express.static(path.resolve(__dirname, "../dist"));

//Serving Static Content
app.use(staticContent);

app.listen(port, ()=>{
    console.log(chalk.green.bold(`Application is up and running on PORT = ${port}`));
});
