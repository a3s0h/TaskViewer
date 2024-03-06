const express = require('express');
const app = express();
const db = require('./configure/db'); // Adjust the path based on your project structure

// Your routes and other setup here...

// Check database connection
db.connect()
  .then(obj => {
    console.log(`Connected to the database on ${obj.client.host}`);
    obj.done(); // success, release the connection
  })
  .catch(error => {
    console.error('Error connecting to the database:', error.message || error);
  });

// Start the Express app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
