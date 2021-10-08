const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/users", require("./src/controllers/userController"));
app.use("/", require("./src/controllers/loginController"));
app.use("/pupils", require("./src/controllers/pupilController"));

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
