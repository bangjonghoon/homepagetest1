const router = require("express").Router();

router.get("/about_us", function (req, res) {
	res.render("about_us.ejs");
});

router.get("/vision", function (req, res) {
	res.render("vision.ejs");
});

router.get("/history", function (req, res) {
	res.render("history.ejs");
});

router.get("/directions", function (req, res) {
	res.render("directions.ejs");
});

module.exports = router;
