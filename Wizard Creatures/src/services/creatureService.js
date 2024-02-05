const Creature = require("../models/Creature");


exports.create = (creatureData) => Creature.create(creatureData);

exports.getAll = () => Creature.find();

exports.singleCreature = (creatureId) => Creature.findById(creatureId);

exports.update = (creatureId, creatureData) => Creature.findByIdAndUpdate(creatureId, creatureData);

exports.delete = (creatureId) => Creature.findByIdAndDelete(creatureId);

exports.getMyCreatures = (ownerId) => Creature.find({owner: ownerId});