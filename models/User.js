const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  googleID: String,
  firstName: String,
  lastName: String,
  fullName: String
});

userSchema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = (password, crypt) => {
  return bcrypt.compareSync(password, crypt);
};

module.export = userSchema;

mongoose.model("users", userSchema);
