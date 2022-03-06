const express = require("express");
const app = express();
const ApiRouter=require('./routes/restapi')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(ApiRouter);

app.listen(process.env.PORT || 3000);
module.exports = app;
