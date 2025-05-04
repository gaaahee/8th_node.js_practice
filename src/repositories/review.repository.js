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

// 리뷰 추가
export const addReview = async (shopId, reviewData) => {
  const conn = await pool.getConnection();
  try {    
    const [result] = await conn.query(
      `INSERT INTO review (shop_id, user_id, rating, comment, image_url, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, NOW(), NOW())`,
      [
        shopId,
        reviewData.userId,
        reviewData.rating,
        reviewData.comment,
        reviewData.imageUrl
      ]
    );
    
    // 생성된 리뷰 조회
    const [reviews] = await conn.query(
      "SELECT * FROM review WHERE id = ?",
      [result.insertId]
    );
    
    return reviews[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
};