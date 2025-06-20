import dotenv from "dotenv";
import express from 'express'
import cors from 'cors';
import { setupSwagger } from "./swagger/swagger.js";
import { handleUserSignUp } from "./controllers/user.controller.js";
import { handleCreateShop, handleListShopReviews } from "./controllers/shop.controller.js";
import { handleCreateReview, handleListMyReviews } from "./controllers/review.controller.js";
import { handleCreateMission, handleListMissionsForShop } from "./controllers/mission.controller.js";
import { handleChallengeMission, handleListInProgressMissions } from "./controllers/mission-log.controller.js";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import session from "express-session";
import passport from "passport";
import { googleStrategy } from "./auth.config.js";
import { prisma } from "./db.config.js";

dotenv.config();

passport.use(googleStrategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

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

app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    },
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, // ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  // #swagger.ignore = true
  console.log(req.user);
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

  // 에러 로깅
  console.error(`[Error] ${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  console.error("Stack:", err.stack || "N/A");
  console.error("Details:", err);

  res.status(err.statusCode || 500).error({ // 커스텀 에러의 statusCode 우선 사용
    errorCode: err.errorCode || "unknown",
    reason: err.message || "서버 내부 오류가 발생했습니다.", // err.message를 기본으로 사용
    data: err.data || null,
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/oauth2/login/google", passport.authenticate("google"));
app.get(
  "/oauth2/callback/google",
  passport.authenticate("google", {
    failureRedirect: "/oauth2/login/google",
    failureMessage: true,
  }),
  (req, res) => res.redirect("/")
);

// Swagger 설정 적용
setupSwagger(app);
/*
// Swagger 설정
app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup({}, {
    swaggerOptions: {
      url: "/openapi.json",
    },
  })
);

app.get("/openapi.json", async (req, res, next) => {
  // #swagger.ignore = true
  const options = {
    openapi: "3.0.0",
    disableLogs: true,
    writeOutputFile: false,
  };
  const outputFile = "/dev/null"; // 파일 출력은 사용하지 않습니다.
  const routes = ["./src/index.js"];
  const doc = {
    info: {
      title: "UMC 8th",
      description: "UMC 8th Node.js 테스트 프로젝트입니다.",
    },
    host: "localhost:3000",
  };

  const result = await swaggerAutogen(options)(outputFile, routes, doc);
  res.json(result ? result.data : null);
});
*/