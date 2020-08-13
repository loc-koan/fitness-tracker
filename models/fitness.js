/* creation of the Fitness DB ; from activity 17.26 */ 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Enter type of exercise',
        },
        name: {
            type: String,
            trim: true,
            required: 'Enter name of exercise',
        },
        distance: {
            type: Number,
            /* a few of these are not required */
        },
        duration: {
            type: Number,
            required: 'Enter minutes of exercise duration',
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
    }],
    date: {
        type: Date,
        default: Date.now
  }
});

const Fitness = mongoose.model('Fitness', fitnessSchema);

module.exports = Fitness;