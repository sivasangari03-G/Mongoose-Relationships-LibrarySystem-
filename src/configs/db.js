const mongoose = require("mongoose");

//step 1) connect express with mongoDB
const connect = () => {
	// this is async func

	return mongoose.connect(
		"mongodb+srv://sivasangari:sivasangari@cluster0.zwgv4.mongodb.net/libraryDB?retryWrites=true&w=majority"
	);
};

module.exports = connect;
