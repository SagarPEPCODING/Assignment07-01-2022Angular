const express = require("express");
const parser = require("body-parser");
const app = express();
var path = require("path");
var cors = require("cors");
const fs = require("fs");
app.use(cors()); // Use this after the variable declaration
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(parser.json());

app.use(
  parser.urlencoded({
    extended: true,
  })
);

app.use(cors());

const persons = [
  { name: "shivam", address: "gurgaon" },
  { name: "simran", address: "Delhi" },
  { name: "sonia", address: "Delhi" },
  { name: "khushi", address: "Delhi" },
  { name: "shubham", address: "gurgaon" },
  { name: "sagar", address: "Delhi" },
  { name: "pankaj", address: "gurgaon" },
  { name: "Dhoni", address: "Ranchi" },
  { name: "Virat", address: "Delhi" },
];

app.get("/users/getPersons", (req, res) => {
  return res.send(persons);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server started on part ${PORT}`));
