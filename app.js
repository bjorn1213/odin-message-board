const express = require("express");
const path = require("node:path");
const app = express();

const messageRouter = require("./routes/messageRouter");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", messageRouter);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`http://127.0.0.1:${PORT}/`);
});
