import pool from "../db.js";

class RefreshSessionRepository {
  static async getRefreshSession(refreshToken) {
    const responce = await pool.query(
      "SELECT * FROM refresh_sessions WHERE refresh_token=$1",
      [refreshToken]
    );

    if (!responce.rows.length) {
      return null;
    }

    return responce.rows[0];
  }

  static async createRefreshSession({ id, refreshToken, fingerprint }) {
    await pool.query(
      "INSERT INTO refresh_sessions (user_id, refresh_token, finger_print) VALUES ($1, $2, $3)",
      [id, refreshToken, fingerprint.hash]
    );
  }

  static async deleteRefreshSession(refreshToken) {
    await pool.query("DELETE FROM refresh_sessions WHERE refresh_token=$1", [
      refreshToken,
    ]);
  }
}

export default RefreshSessionRepository;
