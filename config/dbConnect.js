const mongoose = require("mongoose");
const dotenv = require("dotenv"); //.env 파일에서 환경변수 불러오기
dotenv.config();

//db 에접속하는 코드
const dbConnect = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI);
		console.log("MongoDB connected");
	} catch (err) {
		console.log(err);
	}
};

module.exports = dbConnect;
