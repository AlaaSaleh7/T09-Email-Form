const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
