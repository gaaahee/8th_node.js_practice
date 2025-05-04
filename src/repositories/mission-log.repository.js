import { pool } from "../db.config.js";

// 미션 존재 여부 확인
export const findMissionById = async (missionId) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      "SELECT id FROM mission WHERE id = ?",
      [missionId]
    );
    return rows.length > 0;
  } finally {
    conn.release();
  }
};

// 이미 진행 중인 미션인지 미션로그에서 확인
export const checkExistingMissionLog = async (userId, missionId) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      `SELECT id FROM missionlog 
       WHERE user_id = ? AND mission_id = ? AND status = 'in_progress'`,
      [userId, missionId]
    );
    return rows.length > 0;
  } finally {
    conn.release();
  }
};

export const createMissionLog = async (userId, missionId) => {
  const conn = await pool.getConnection();
  try {    
    const [result] = await conn.query(
      `INSERT INTO missionlog 
       (user_id, mission_id, status, created_at, updated_at)
       VALUES (?, ?, 'in_progress', NOW(), NOW())`,
      [userId, missionId]
    );

    return result.insertId;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
};