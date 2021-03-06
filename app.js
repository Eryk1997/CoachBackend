const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/users", require("./src/controllers/userController"));
app.use("/", require("./src/controllers/loginController"));
app.use("/roles",require("./src/controllers/TypeOfRoleController"));
app.use("/pupils",require("./src/controllers/PupilController"));
app.use('/trainers',require("./src/controllers/TrainerController"))
app.use('/products',require('./src/controllers/ProductController'))
app.use('/exercises',require('./src/controllers/ExerciseController'))

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
