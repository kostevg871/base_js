import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import TokenService from "./Token.js";
import {
  NotFound,
  Forbidden,
  Conflict,
  Unauthorized,
} from "../utils/Errors.js";
import RefreshSessionsRepository from "../repositories/RefreshSession.js";
import UserRepository from "../repositories/User.js";
import { ACCESS_TOKEN_EXPIRATION } from "../constants.js";
import RefreshSessionRepository from "../repositories/RefreshSession.js";

class AuthService {
  static async signIn({ userName, password, fingerprint }) {
    const userData = await UserRepository.getUserData(userName);

    if (!userData) {
      throw new NotFound("Пользователь не найден!");
    }

    const isPasswordValid = bcrypt.compareSync(password, userData.password);

    if (!isPasswordValid) {
      throw new Unauthorized("Неверный логин или пароль");
    }

    const payload = { id: userData.id, role: userData.role, userName };

    const accessToken = await TokenService.generateAccessToken(payload);
    const refreshToken = await TokenService.generateRefreshToken(payload);

    await RefreshSessionsRepository.createRefreshSession({
      id: userData.id,
      refreshToken,
      fingerprint,
    });

    return {
      accessToken,
      refreshToken,
      accessTokenExpiration: ACCESS_TOKEN_EXPIRATION,
    };
  }

  static async signUp({ userName, password, fingerprint, role }) {
    const userData = await UserRepository.getUserData(userName);

    if (userData) {
      throw new Conflict("Пользователь с таким именем существует!!");
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const { id } = await UserRepository.createUser({
      userName,
      hashedPassword,
      role,
    });

    const payload = { id, userName, role };

    const accessToken = await TokenService.generateAccessToken(payload);
    const refreshToken = await TokenService.generateRefreshToken(payload);

    await RefreshSessionsRepository.createRefreshSession({
      id,
      refreshToken,
      fingerprint,
    });

    return {
      accessToken,
      refreshToken,
      accessTokenExpiration: ACCESS_TOKEN_EXPIRATION,
    };
  }

  static async logOut(refreshToken) {
    await RefreshSessionsRepository.deleteRefreshSession(refreshToken);
  }

  static async refresh({ fingerprint, currentRefreshToken }) {
    if (!currentRefreshToken) {
      throw new Unauthorized();
    }

    const RefreshSession = await RefreshSessionRepository.getRefreshSession(
      currentRefreshToken
    );

    if (!RefreshSession) {
      throw new Unauthorized();
    }

    if (RefreshSession.finger_print !== fingerprint.hash) {
      console.log("Попытка несанкционированного обновления токенов");
      throw new Forbidden();
    }

    await RefreshSessionRepository.deleteRefreshSession(currentRefreshToken);

    let payload;

    try {
      payload = await TokenService.verifyRefreshToken(currentRefreshToken);
    } catch (error) {
      throw new Forbidden(error);
    }

    const {
      id,
      role,
      name: userName,
    } = await UserRepository.getUserData(payload.userData);

    const actualpayload = { id, userName, role };

    const accessToken = await TokenService.generateAccessToken(actualpayload);
    const refreshToken = await TokenService.generateRefreshToken(actualpayload);

    await RefreshSessionRepository.createRefreshSession({
      id,
      refreshToken,
      fingerprint,
    });

    return {
      accessToken,
      refreshToken,
      accessTokenExpiration: ACCESS_TOKEN_EXPIRATION,
    };
  }
}

export default AuthService;
