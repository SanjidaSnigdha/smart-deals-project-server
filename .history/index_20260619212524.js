const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());
// pass : RQBXkpexjF7VfYug

const uri =
  "mongodb+srv://<db_username>:<db_password>@cluster0.cdjooie.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Smart server is running");
});

app.listen(port, () => {
  console.log(`Smart Server is running on port: ${port}`);
});
