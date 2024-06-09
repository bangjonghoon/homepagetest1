const router = require("express").Router();

router.get("/personnelsystem", function (req, res) {
	res.render("personnelsystem.ejs");
});
router.get("/culture", function (req, res) {
	res.render("culture.ejs");
});
router.get("/recruitment", function (req, res) {
	res.render("recruitment.ejs");
});

module.exports = router;
