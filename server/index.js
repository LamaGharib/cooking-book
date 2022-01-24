import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const connectionUrl = process.env.CONNECTION_URL;
app.use(express.json());
app.use("/api", router);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: true }));

mongoose
  .connect(
    "mongodb+srv://lama:lamagharib@cluster0.jb9hk.mongodb.net/cooking?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server running on port ${PORT} and database is connected `)
    )
  )
  .catch((err) => console.log(err.message));