import fs from "fs";
import express from "express";
import cors from "cors";
import treeRouter from "./treeRouter";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Try /tree/:courseId or /json/:courseId");
});

app.use("/tree", treeRouter);

app.listen(4000, () => {
  console.log("Server is running");
});
