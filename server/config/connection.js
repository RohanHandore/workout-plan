const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const user = "admin";
const password = "7CpGZ826n5qUXRtj";

mongoose.connect(
	process.env.MONGODB_URI ||
		"mongodb+srv://admin:7CpGZ826n5qUXRtj@cluster0.u0wyvop.mongodb.net/Test?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) throw err;
		console.log("Connected to MongoDB!");
	}
);

module.exports = mongoose.connection;
