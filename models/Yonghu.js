var mongoose = require("mongoose");

module.exports = mongoose.model("Yonghu", {
    "mobile": String,
    "email": String,
    "name": String,
    "provicen": String,
    "id":Number
});



