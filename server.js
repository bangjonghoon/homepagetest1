const dotenv = require("dotenv"); //.env 파일에서 환경변수 불러오기
dotenv.config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const port = process.env.PORT || 4000;
const mongoclient = require("mongodb").MongoClient;

const server = async () => {
	try {
		let mydb;
		await mongoclient.connect(process.env.MONGO_URI).then(client => {
			mydb = client.db("myboard");
			console.log("MongoDB connected");

			app.use(express.urlencoded({ extended: true }));
			app.use(express.json());
			app.use(morgan("dev"));
			app.use(express.static("public"));
			app.set("view engine", "ejs");

			app.use("/", require("./routes/about_us.js"));
			app.use("/", require("./routes/business_area.js"));
			app.use("/", require("./routes/recruite.js"));

			app.get("/", function (req, res) {
				res.render("index.ejs");
			});

			app.listen(port, function () {
				console.log("Express server listening on PORT" + port);
			});
		});
	} catch (err) {
		console.log(err);
	}
};

server();
