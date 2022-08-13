const express = require("express");
const cors = require("cors");
const {
  getHouses,
  deleteHouse,
  createHouse,
  updateHouse,
} = require("./ctrl/controller");

const app = express();

const port = 4004;

app.use(express.json());
app.use(cors());

app.get("/api/houses", getHouses);
app.post("/api/houses", createHouse);
app.put("/api/houses/:id", updateHouse);
app.delete("/api/houses/:id", deleteHouse);

app.listen(port, () => console.log(`Server is running on ${port}`));
