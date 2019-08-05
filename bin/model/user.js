const mongoose = require("mongoose");
const Schema = mongoose.schema;

const UserSchema = new Schema({
      nickname: string,
      password: string,
      picture:  string
});

var User = mongoose.node("User", UserSchema);
module.exports = User;