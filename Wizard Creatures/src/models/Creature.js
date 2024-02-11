const mongoose = require("mongoose")


const creatureSchema = new mongoose.Schema({
    name: { type: String, minLength: 2, },
    species: { type: String, minLength: 3, },
    skinColor: { type: String, minLength: 3, },
    eyeColor: { type: String, minLength: 3, },
    image: { type: String, required: true },
    description: { type: String, minLength: 5, maxLength: 500, },
    votes: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

const Creature = mongoose.model("Creature", creatureSchema);
module.exports = Creature; 