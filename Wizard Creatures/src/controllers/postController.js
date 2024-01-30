const router = require("express").Router();
const creatureService = require("../services/creatureService")

router.get("/all", async (req, res) => {
    const creatures = await creatureService.getAll().lean();

    res.render("post/all-posts", { creatures });
});

router.get("/create", (req, res) => {
    res.render("post/create");
});

router.post("/create", async (req, res) => {
    const { name, species, skinColor, eyeColor, image, description } = req.body;

    const payload = { name, species, skinColor, eyeColor, image, description, owner: req.user, };

    await creatureService.create(payload);

    res.redirect("/posts/all");
})
router.get("/profile", (req, res) => {
    res.render("post/profile");
});

router.get("/details/:creatureId", async (req, res) => {
    const { creatureId } = req.params;

    const creature = await creatureService.singleCreature(creatureId).lean();

    const { user } = req;
    const { owner } = creature;

    const isOwner = user._id === owner.toString();
    console.log({ isOwner });

    res.render("post/details", { creature, isOwner });
})

module.exports = router; 