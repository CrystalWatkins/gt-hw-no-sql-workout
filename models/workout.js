const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
date: {
    type:  Date,
    default: Date.now
},
exercises: [ 
    {
        name: {
            type: String,
            trim: true,
            require: "Workout is Required"
        },
        type: {
            type: String,
            trim: true,
            require: "Type is Required"
        },
        weight: {
            type: Number,
            min: 0,
            max: 900,
        },
        sets: {
            type: Number,
            min: 0,
            max: 100,
        },
        reps: {
            type: Number,
            min: 0,
            max: 500
        },
        duration: {
            type: Number,
            min: 0,
            max: 7200
        },
        distance: {
            type: Number,
            min: 0,
        }
    }
],
duration: {
    type: Number,
    default: 0,
},
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;