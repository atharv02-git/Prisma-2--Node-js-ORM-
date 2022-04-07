const express = require('express');
const app = express();

// To access the data from req.body
app.use(express.json());

// accepting the get request route as a middleware
app.use("/api/user", require("./routes/user"));


app.listen(3000, () => {
    console.log('Express server listening on port 3000');
})