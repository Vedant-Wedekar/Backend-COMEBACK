const express = require('express');
const app = express();




// Define PORT properly
const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
  res.send('Hello, Backend!');
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
















