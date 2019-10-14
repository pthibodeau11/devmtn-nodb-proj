const express = require("express");
const {
  viewEdits,
  addEdit,
  removeEdit,
  updateEdit,
  updateStatus
} = require("./requestController");
const app = express();

const PORT = 7000;

app.use(express.json());

app.get("/api/list", viewEdits);
app.post("/api/list", addEdit);
app.delete("/api/list/:id", removeEdit);
app.put("/api/list/:id", updateEdit);
app.put("/api/lists/:id", updateStatus);

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
