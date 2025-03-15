// const express = require('express');
import express from 'express'; // ES6 syntax
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/joke',(req,res)=>{
    const jokes = [
        {
        id :1,
        title: "Joke",
        content: "Why did the scarecrow win an award? Because he was outstanding in his field."
    },
    {
        id :2,
        title: "a Joke",
        content: " a Why did the scarecrow win an award? Because he was outstanding in his field."
    }
    ,    {
        id :3,
        title: "Joke",
        content: "Why did the scarecrow win an award? Because he was outstanding in his field."
    }]
    res.json(jokes) 
})



app.listen(3000, () => {    // server listens on port 3000
    console.log('Server is running on port 3000');
});



