import express from "express";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import userRoute from "./routes/users.js"
import authRoutes from "./routes/auths.js"
import tweetRoutes from "./routes/tweets.js"
import cookieParser from "cookie-parser";
import { dirname } from "path";

const __dirname = path.resolve();

const app = express();
dotenv.config();

const connect = () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(process.env.MONGO)
        .then( () => { 
            console.log("Connect to MongoDB database");
        })
        .catch( (err) => {
            throe.error(err);
        });
};



app.use(cookieParser());
app.use(express.json());
app.use("/users", userRoute);
app.use("/auth", authRoutes);
app.use("/tweets", tweetRoutes);


app.use(express.static(path.join(__dirname,"./client/build")));

app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"),
    function (err) {
        res.status(500).send(err);
    });
});


app.listen(8000, ()=> {
    connect();
    console.log("listening to port 8000");
})