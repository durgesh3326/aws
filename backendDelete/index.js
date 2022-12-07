const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());

app.delete("/tasks/delete", async (req, res) => {
    res.send("Data Deleted")
	console.log("Data is deleted sucessfully...")
    try {
		const response = await axios({
			url: "http://localhost:5000/tasks",
			method: "DELETE",
		});
        console.log("fechted all Data...")
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});


app.listen(5002, () => {
	console.log("Server started at port 5002");
});