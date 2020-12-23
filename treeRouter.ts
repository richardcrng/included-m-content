import fs from "fs";
import { Router } from "express";

const treeRouter = Router();

treeRouter.get("/:courseId", (req, res) => {
  fs.readdir(req.params.courseId, (err, files) => {
    const content = files.map((fileName) => ({
      name: fileName,
      path: req.params.courseId,
      type: fileName.match(/json/) ? "blob" : "tree",
    }));
    res.json(content);
  });
});

treeRouter.get("/:courseId/:topicId", (req, res) => {
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

treeRouter.get("/:courseId/:topicId/:chapterId", (req, res) => {
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

treeRouter.get("/:courseId/:topicId/:chapterId/:lessonId", (req, res) => {
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

export default treeRouter;
