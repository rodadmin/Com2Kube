const express = require("express");
const cors = require("cors");
const app = express();

//Import Routes
const statusRoute = require("./routes/status");
const uploadRoute = require("./routes/Upload");

const corsOptions = {
  origin: "http://dev-c2k.canadacentral.cloudapp.azure.com"
};

// let the app use cors
app.use(cors());
//allow OPTIONS on all resources
app.options("*", cors(corsOptions));

//Routes
app.use("/api/status", statusRoute);
app.use("/api/upload", uploadRoute);

//Start server
app.listen(5000);
