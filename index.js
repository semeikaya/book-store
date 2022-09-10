const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

app.use(require("./routes/author.route.js"))
app.use(require("./routes/book.route.js"))
app.use(require("./routes/genre.route.js"))
app.use(require("./routes/review.route.js"))


mongoose.connect("mongodb+srv://bersyak:web2000web@cluster0.akjwcf0.mongodb.net/books", (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Успешно соединились с сервером MongoDB')

    app.listen(4000, () => {
        console.log('Сервер успешно запущен');
    });
})