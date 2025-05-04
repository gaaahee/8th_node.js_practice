import dotenv from "dotenv";
import express from 'express'
import cors from 'cors';
import { handleUserSignUp } from "./controllers/user.controller.js";
import { handleCreateShop } from "./controllers/shop.controller.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/api/v1/users/signup", handleUserSignUp);
app.post("/regions/:regionId/shops", handleCreateShop);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.use((req, res, next) => {
//   console.log(`[${req.method}] ${req.url}`);
//   next();
// });