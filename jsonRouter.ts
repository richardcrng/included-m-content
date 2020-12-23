import fs from "fs";
import { Router } from "express";

const jsonRouter = Router();

jsonRouter.get("/:courseId", (req, res) => {
  fs.readFile(
    [req.params.courseId, "index.json"].join("/"),
    "utf8",
    (err, data) => {
      res.json(JSON.parse(data));
    }
  );
});

jsonRouter.get("/:courseId/:topicId", (req, res) => {
  fs.readFile(
    [req.params.courseId, req.params.topicId, "index.json"].join("/"),
    "utf8",
    (err, data) => {
      res.json(JSON.parse(data));
    }
  );
});

jsonRouter.get("/:courseId/:topicId/:chapterId", (req, res) => {
  fs.readFile(
    [
      req.params.courseId,
      req.params.topicId,
      req.params.chapterId,
      "index.json",
    ].join("/"),
    "utf8",
    (err, data) => {
      res.json(JSON.parse(data));
    }
  );
});

jsonRouter.get("/:courseId/:topicId/:chapterId/:lessonId", (req, res) => {
  fs.readFile(
    [
      req.params.courseId,
      req.params.topicId,
      req.params.chapterId,
      req.params.lessonId,
      "index.json",
    ].join("/"),
    "utf8",
    (err, data) => {
      res.json(JSON.parse(data));
    }
  );
});

export default jsonRouter;
