const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect("mongodb+srv://Rishabh123:R1shabh2002@cluster0.lgoyv.mongodb.net/backend?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected successfully....");

        // Start the server only after the DB connection is successful
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err);
            }
            console.log("Server is running on PORT : " + PORT);
        });
    })
    