import dotenv from "dotenv";
import express from 'express'
import cors from 'cors';
import { handleUserSignUp } from "./controllers/user.controller.js";
import { handleCreateShop, handleListShopReviews } from "./controllers/shop.controller.js";
import { handleCreateReview, handleListMyReviews } from "./controllers/review.controller.js";
import { handleCreateMission, handleListMissionsForShop } from "./controllers/mission.controller.js";
import { handleChallengeMission, handleListInProgressMissions } from "./controllers/mission-log.controller.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

// 공통 응답을 사용할 수 있는 헬퍼 함수 등록
app.use((req, res, next) => {
  res.success = (success) => {
    return res.json({ resultType: "SUCCESS", error: null, success });
  };

  res.error = ({ errorCode = "unknown", reason = null, data = null }) => {
    return res.json({
      resultType: "FAIL",
      error: { errorCode, reason, data },
      success: null,
    });
  };

  next();
});

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/api/v1/shops/:shopId/reviews", handleListShopReviews);
app.get("/users/:userId/reviews", handleListMyReviews);
app.get("/shops/:shopId/missions", handleListMissionsForShop);
app.get("/users/:userId/missions/in-progress", handleListInProgressMissions);

app.post("/api/v1/users/signup", handleUserSignUp);
app.post("/regions/:regionId/shops", handleCreateShop);
app.post("/shops/:shopId/reviews", handleCreateReview);
app.post("/shops/:shopId/missions", handleCreateMission);
app.post("/missions/:missionId/challenge", handleChallengeMission);

// 전역 오류를 처리하기 위한 미들웨어
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(err.statusCode || 500).error({
    errorCode: err.errorCode || "unknown",
    reason: err.reason || err.message || null,
    data: err.data || null,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})