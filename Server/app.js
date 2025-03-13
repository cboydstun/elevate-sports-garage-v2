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
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connect();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.send("Hello World!");
});

// Serve static files from Client/dist with absolute path
const clientDistPath = path.resolve(__dirname, '../Client/dist');
app.use(express.static(clientDistPath, {
  // Ensure proper MIME types are set
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (path.endsWith('.svg')) {
      res.setHeader('Content-Type', 'image/svg+xml');
    }
  }
}));

app.use("/", AdminRoute);
app.use("/", ServicesRoute);
app.use("/", ReviewsRoute);
app.use("/", ContactsRoute);
app.use("/", ProductsRoute);
app.use("/", HoursRoute);

// Add a catch-all route for SPA client-side routing
app.get('*', (req, res) => {
  // Skip API routes
  if (req.path.startsWith('/api')) {
    return res.status(404).send('API endpoint not found');
  }
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
