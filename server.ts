import express from "express";
import cors from "cors";
import treeRouter from "./treeRouter";
import jsonRouter from "./jsonRouter";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Try /tree/:courseId or /json/:courseId");
});

app.use("/tree", treeRouter);

app.use("/json", jsonRouter);

app.listen(4000, () => {
  console.log("Server is running");
});
