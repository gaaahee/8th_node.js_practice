import { pool } from "../db.config.js";

// 가게 존재 여부 확인
export const findShopById = async (shopId) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      "SELECT id FROM shop WHERE id = ?",
      [shopId]
    );
    return rows.length > 0;
  } finally {
    conn.release();
  }
};

// 미션 추가
export const addMission = async (shopId, missionData) => {
  const conn = await pool.getConnection();
  try {    
    const [result] = await conn.query(
      `INSERT INTO mission (shop_id, description, point, due_date, created_at, updated_at)
       VALUES (?, ?, ?, ?, NOW(), NOW())`,
      [
        shopId,
        missionData.description,
        missionData.point,
        missionData.dueDate
      ]
    );
    
    return result.insertId;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
};