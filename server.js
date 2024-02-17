const express = require('express');
const fs = require ("fs")

const app = express();

app.use(express.json());

//routes
fs.readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});