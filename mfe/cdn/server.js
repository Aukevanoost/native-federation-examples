const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'dist' directory
app.use((req, res, next) => {  
  // res.header('Cache-Control', 'no-cache');
  // res.header('Pragma', 'no-cache');
  // res.header('Expires', '0');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Timing-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Serving static files from: ${path.join(__dirname, 'dist')}`);
});