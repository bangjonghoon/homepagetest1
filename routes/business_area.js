const router = require("express").Router();

router.get("/headupdisplay", function (req, res) {
	res.render("headup_display.ejs");
});

module.exports = router;
