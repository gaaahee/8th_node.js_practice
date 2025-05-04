import { pool } from "../db.config.js";

// 지역이 존재하는지 확인
export const findRegionById = async (regionId) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      "SELECT id FROM region WHERE id = ?",
      [regionId]
    );
    return rows.length > 0;
  } finally {
    conn.release();
  }
};

// shop 테이블에 가게 추가
export const addShop = async (regionId, shopData) => {
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(
      `INSERT INTO shop (name, region_id, address, created_at, updated_at)
       VALUES (?, ?, ?, NOW(), NOW())`,
      [shopData.name, regionId, shopData.address]
    );
    return result.insertId;
  } finally {
    conn.release();
  }
};