import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.json({ msg: "Hello world" });
});

app.listen(3500);
