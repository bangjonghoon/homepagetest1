const router = require("express").Router();

router.get("/notice", function (req, res) {
	res.render("notice.ejs");
});

router.get("/financial", function (req, res) {
	res.render("financial.ejs");
});

router.get("/news", function (req, res) {
	res.render("news.ejs");
});

module.exports = router;
