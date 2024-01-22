const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String, required: true, unique: {
            value: true,
            message: "Email exists! (from schema)",
        },
    },
    password: { type: String, required: true },
});

// userSchema.path("email").validate(function (emailInput) {
//     const email = mongoose.model("User").findOne({ email });
//     return !!email;
// }, "Email already exists!")

userSchema.virtual("repeatPassword").set(function (value) {
    console.log({ value });
    if (value !== this.password) {
        throw new Error("Password missmatch!");
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;