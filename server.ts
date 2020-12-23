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

app.get("/", (req, res) => {
  res.send("Try /tree/:courseId or /json/:courseId");
});

app.get("/tree/:courseId", (req, res) => {
  fs.readdir(req.params.courseId, (err, files) => {
    const content = files.map((fileName) => ({
      name: fileName,
      path: req.params.courseId,
      type: fileName.match(/json/) ? "blob" : "tree",
    }));
    res.json(content);
  });
});

app.get("/tree/:courseId/:topicId", (req, res) => {
  fs.readdir(
    [req.params.courseId, req.params.topicId].join("/"),
    (err, files) => {
      const content = files.map((fileName) => ({
        name: fileName,
        path: req.params.courseId,
        type: fileName.match(/json/) ? "blob" : "tree",
      }));
      res.json(content);
    }
  );
});

app.get("/tree/:courseId/:topicId/:chapterId", (req, res) => {
  fs.readdir(
    [req.params.courseId, req.params.topicId, req.params.chapterId].join("/"),
    (err, files) => {
      const content = files.map((fileName) => ({
        name: fileName,
        path: req.params.courseId,
        type: fileName.match(/json/) ? "blob" : "tree",
      }));
      res.json(content);
    }
  );
});

app.get("/tree/:courseId/:topicId/:chapterId/:lessonId", (req, res) => {
  fs.readdir(
    [
      req.params.courseId,
      req.params.topicId,
      req.params.chapterId,
      req.params.lessonId,
    ].join("/"),
    (err, files) => {
      const content = files.map((fileName) => ({
        name: fileName,
        path: req.params.courseId,
        type: fileName.match(/json/) ? "blob" : "tree",
      }));
      res.json(content);
    }
  );
});

app.listen(4000, () => {
  console.log("Server is running");
});
