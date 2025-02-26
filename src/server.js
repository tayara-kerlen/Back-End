import express, { json } from "express";
import route from "./route/route.js";
import cors from "cors"

const app = express();
const porta = 3000;
app.use(express.json());
app.use(cors());

app.use("/api", route);
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`); 
})