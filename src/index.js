import dotenv from "dotenv";
import express from 'express'
import cors from 'cors';
import { handleUserSignUp } from "./controllers/user.controller.js";
import { handleCreateShop } from "./controllers/shop.controller.js";
import { handleCreateReview } from "./controllers/review.controller.js";
import { handleCreateMission } from "./controllers/mission.controller.js";

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
app.post("/shops/:shopId/reviews", handleCreateReview);
app.post("/shops/:shopId/missions", handleCreateMission);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.use((req, res, next) => {
//   console.log(`[${req.method}] ${req.url}`);
//   next();
// });