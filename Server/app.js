import express from "express";
const app = express();
const port = 3000;
import dotenv from "dotenv";
dotenv.config();
import { connect } from "./config/database.js";
import AdminRoute from "./routes/admin.route.js";
import ServicesRoute from "./routes/services.route.js";
import ReviewsRoute from "./routes/reviews.route.js";
import ContactsRoute from "./routes/contacts.route.js";
import ProductsRoute from './routes/products.route.js'
import HoursRoute from './routes/hours.route.js'
import cors from "cors";

connect();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.send("Hello World!");
});

// server ../Client/dist folder
app.use(express.static("../Client/dist"));

app.use("/", AdminRoute);
app.use("/", ServicesRoute);
app.use("/", ReviewsRoute);
app.use("/", ContactsRoute);
app.use("/", ProductsRoute);
app.use("/", HoursRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
