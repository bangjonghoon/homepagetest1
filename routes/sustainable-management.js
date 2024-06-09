const router = require("express").Router();

router.get("/main_value", function (req, res) {
	res.render("main_value.ejs");
});
router.get("/quality_innovation", function (req, res) {
	res.render("quality_innovation.ejs");
});

router.get("/esg_innovation", function (req, res) {
	res.render("esg_innovation.ejs");
});

router.get("/certifi", function (req, res) {
	res.render("certifi.ejs");
});

module.exports = router;
