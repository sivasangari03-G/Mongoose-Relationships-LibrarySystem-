const express = require('express');
const connect = require('./configs/db')
const app = express();
const authorController = require('./controllers/author.controller')
const bookController = require("./controllers/book.controller");
const sectionController = require("./controllers/section.controller");


app.use(express.json());

app.use("/authors", authorController)
app.use("/books", bookController);
app.use("/sections", sectionController);



app.listen(8000, async () => {
    try {
        await connect();
        console.log("App is Listening on port 8000");
    } catch (err) {
        console.log(err.message);
    }
})