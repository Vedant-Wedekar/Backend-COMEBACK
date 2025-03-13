const express = require('express');
const app = express();
const PORT = 3000 
require('dotenv').config()

app.get('/',(req,res) =>{
    res.send("Hello World");
console.log("this is server ");
});

app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})


















