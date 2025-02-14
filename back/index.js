const express = require('express')
const cors=require('cors');
const connectDB = require('./src/database/db');
const app = express()
const port = 3000

app.use(express.json());

app.use(cors());

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const headerRoutes = require("./src/routes/header.routes");
app.use("/headers", headerRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
