const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    general: Array,
    customGroups: Array
});

module.exports = mongoose.model("Book", bookSchema);