import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";
import Todo from "./src/model/todo.model.js";
import { hello, todoDelete, todoEdit, todoGet, todoPost } from "./src/controllers/todo.controllers.js";

dotenv.config();

const app = express();
const port = process.env.PORT ||5000;

// Middleware
app.use(cors());
app.use(express.json());



// MongoDB connection
connectDB()



// Routes
app.get('/',hello)

app.get('/todos', todoGet);

app.post('/todos', todoPost);

app.put('/todos/:id', todoEdit);

app.delete('/todos/:id', todoDelete);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
