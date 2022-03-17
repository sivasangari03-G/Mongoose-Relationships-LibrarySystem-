const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	name: { type: String, required: true },
	body: { type: String, required: true },
	section_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "sections",
	},
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: "authors" },
    isCheckedOut: {type: Boolean, default: false},
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
