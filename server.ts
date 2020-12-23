import fs from "fs";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

interface GitLabTreeContent {
  id?: string;
  name: string;
  type: "tree" | "blob";
  path: string;
  mode?: string;
}

app.get("/:courseId", (req, res) => {
  fs.readdir(req.params.courseId, (err, files) => {
    const content = files.map((fileName) => ({
      name: fileName,
      path: req.params.courseId,
      type: fileName.match(/json/) ? "blob" : "tree",
    }));
    res.json(content);
  });
});

app.listen(4000, () => {
  console.log("Server is running");
});
