const router = require("express").Router();

router.get("/philosophy", function (req, res) {
	res.render("philosophy.ejs");
});

router.get("/esg_innovation", function (req, res) {
	res.render("esg_innovation.ejs");
});

router.get("/certifi", function (req, res) {
	res.render("certifi.ejs");
});

module.exports = router;
