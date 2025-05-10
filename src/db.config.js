//import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { PrismaClient } from "./generated/prisma/index.js";

export const prisma = new PrismaClient();

dotenv.config();

// export const pool = mysql.createPool({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   port: process.env.DB_PORT || 3306,
//   database: process.env.DB_NAME || "8th_umc",
//   password: process.env.DB_PASSWORD,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });
