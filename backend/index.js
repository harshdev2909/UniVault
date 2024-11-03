import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import multer from "multer";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, '.files')
	},
	filename: function (req, file, cb) {
	  const uniqueSuffix = Date.now() 
	  cb(null, uniqueSuffix+file.originalname)
	}
  })
  
  const upload = multer({ storage: storage })
app.post('upload-files',upload.single('file'),async(req,res)=>{

})

app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});
