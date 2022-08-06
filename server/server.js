const express = require('express');
const path = require('path');
const router = require('./routers/router');

const app = express();
const PORT = process.env.PORT || 1555;

app.use(express.static(path.join(__dirname, '..', 'public/')));
app.use("/", router)

app.listen(PORT, () => {
    console.log('http://localhost:%s', PORT);
});