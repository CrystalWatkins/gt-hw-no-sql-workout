const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout)
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((createdWorkout) => {
      res.json(createdWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req,res) => {
  db.Workout.find({})
  .limit(7)
  .then((dbWorkout) => {
    console.log("dbWorkout", dbWorkout.length);
      res.json(dbWorkout)
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((updatedWorkout) => {
      res.json(updatedWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;