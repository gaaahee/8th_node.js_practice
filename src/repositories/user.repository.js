import { pool } from "../db.config.js";

// User 데이터 삽입
export const addUser = async (data) => {
  const conn = await pool.getConnection();

  // 1. userlogin 테이블에 이메일 중복 확인
  try {
    const [confirm] = await conn.query(
      `SELECT EXISTS(SELECT 1 FROM userlogin WHERE email = ?) as isExistEmail;`,
      [data.email]
    );

    if (confirm[0].isExistEmail) {
      return null;
    }

    // 2. userlogin 테이블에 이메일, 비밀번호 삽입
    const [result] = await conn.query(
      `INSERT INTO userlogin (email, password) VALUES (?, ?);`,
      [data.email, data.password]
    );

    const userId = result.insertId;

    // 3. userinfo 테이블에 사용자 정보 삽입
    await conn.query(
      `INSERT INTO userinfo (user_id, gender, birthdate, address, user_name, phone_number, created_at, updated_at) 
       VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW());`,
      [
        userId,
        data.gender,
        data.birth,
        data.address,
        data.name,
        data.phoneNumber
      ]
    );

    // 4. 선호 카테고리가 있으면 usercategory 테이블에 삽입
    if (data.preferences && data.preferences.length > 0) {
      for (const categoryId of data.preferences) {
        await conn.query(
          `INSERT INTO usercategory (user_id, category_id) VALUES (?, ?);`,
          [userId, categoryId]
        );
      }
    }
    return userId;

  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};

// 사용자 정보 조회
export const getUser = async (userId) => {
  const conn = await pool.getConnection();

  try {
    const [user] = await conn.query(
      `SELECT l.email, i.user_name as name, i.gender, i.birthdate as birth, 
              i.address, i.phone_number as phoneNumber, i.point
       FROM userlogin l 
       JOIN userinfo i ON l.id = i.user_id
       WHERE l.id = ?;`, userId
    );

    console.log(user);

    if (user.length == 0) {
      return null;
    }

    return user;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};

// 사용자 선호 카테고리 조회
export const getUserPreferencesByUserId = async (userId) => {
  const conn = await pool.getConnection();
  
  try {
    const [preferences] = await conn.query(
      `SELECT c.id, c.name
       FROM usercategory uc 
       JOIN category c ON uc.category_id = c.id
       WHERE uc.user_id = ?
       ORDER BY c.id ASC;`,
      [userId]
    );
    
    return preferences;
  } catch (err) {
    throw new Error(`오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`);
  } finally {
    conn.release();
  }
};