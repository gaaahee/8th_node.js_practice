import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";
import {
  ErrorResponse400_Default,
  ErrorResponse400_ReviewCreate,
  ErrorResponse400_UserSignUp,
  ErrorResponse400_InvalidUserId,
  ErrorResponse400_ListFetchFailed,
  ErrorResponse404_ShopNotFound,
  ErrorResponse404_UserNotFound,
  ErrorResponse500,
  ErrorResponse404_MissionNotFound,
  ErrorResponse409_MissionAlreadyChallenged,
  ErrorResponse404_RegionNotFound
} from './schemas/error.schema.js';

const options = {
  openapi: "3.0.0",
  disableLogs: true,
  writeOutputFile: false,
};

const outputFile = "/dev/null";
const routes = ["./src/index.js"];

const doc = {
  info: {
    title: "UMC 8th",
    description: "UMC 8th Node.js 테스트 프로젝트입니다.",
    version: "1.0.0",
  },
  host: `localhost:${process.env.PORT || 3000}`,
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  components: {
    schemas: {
      ErrorResponse400_Default,
      ErrorResponse400_UserSignUp,
      ErrorResponse400_ListFetchFailed,
      ErrorResponse400_InvalidUserId,
      ErrorResponse404_UserNotFound,
      ErrorResponse400_ReviewCreate,
      ErrorResponse404_ShopNotFound,
      ErrorResponse500,
      ErrorResponse404_MissionNotFound,
      ErrorResponse409_MissionAlreadyChallenged,
      ErrorResponse404_RegionNotFound
    }
  }
};

export const setupSwagger = (app) => {
  app.use(
    "/docs",
    swaggerUiExpress.serve,
    swaggerUiExpress.setup({}, { swaggerOptions: { url: "/openapi.json" } })
  );

  app.get("/openapi.json", async (req, res) => {
    // #swagger.ignore = true
    const result = await swaggerAutogen(options)(outputFile, routes, doc);
    res.json(result ? result.data : null);
  });
};