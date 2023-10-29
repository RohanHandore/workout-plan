const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");
const cors = require("cors");
// import morgan from 'morgan'

// app.use(morgan(':method :url'));

var allowCrossDomain = function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
};

router.use(allowCrossDomain);
router.use(cors());

router.use("/api", apiRoutes);

// connect with react router
// serve up react front-end in production
router.use((req, res) => {
	res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
