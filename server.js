const express = require('express');
const db = require('./db/connection')
const apiRoutes = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//can remove /api from routes by using this
app.use('/api', apiRoutes)

//default response for requests not found must be last get route! 
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});