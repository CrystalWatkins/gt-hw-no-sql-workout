const mongoose = require("mongoose");
const opts = {toJSON: {virtuals:true} };
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
day: {
    type:  Date,
    default: Date.now
},
exercises: [ 
    {
        type: {
            type: String,
            trim: true,
            require: "Type is Required"
        },
        name: {
            type: String,
            trim: true,
            require: "Workout is Required"
        },
      duration: {
            type: Number,
            min: 0,
            max: 7200
        },
        weight: {
            type: Number,
            min: 0,
            max: 900,
        },
        
        reps: {
            type: Number,
            min: 0,
            max: 500
        },
        sets: {
            type: Number,
            min: 0,
            max: 100,
        },
        distance: {
            type: Number,
            min: 0,
        },
    },
],
},
opts);

WorkoutSchema.virtual('totalDuration').get(function() {
    let totalDuration = 0;
    for (let i = 0; i < this.exercises.length; i++) {
      totalDuration += this.exercises[i].duration;
    }
  return totalDuration;
  })

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;