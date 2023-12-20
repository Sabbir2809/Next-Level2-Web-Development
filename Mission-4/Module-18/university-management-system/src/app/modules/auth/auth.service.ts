import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import AppError from "../../errors/AppError";
import User from "../user/user.model";
import { ILoginUser } from "./auth.interface";

const loginUser = async (payload: ILoginUser) => {
  // checking if the user is exist
  const user = await User.isUserExistsByCustomId(payload?.id);

  if (!user) {
    throw new AppError(404, "This User is Not Found!");
  }

  // checking if the user is already deleted
  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(404, "This User is Deleted");
  }

  // checking if the user is already blocked
  const userStatus = user?.status;
  if (userStatus === "blocked") {
    throw new AppError(404, "This User is Blocked");
  }

  // checking if the password is correct
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(403, "Password do not Matched!");
  }

  // access: send accessToken, refreshToken
  // create token and sent to the client
  const jwtPayload = {
    userId: user.id,
    role: user.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, { expiresIn: "10d" });

  return {
    accessToken,
    needsPasswordChange: user?.needsPasswordChange,
  };
};

const changePassword = async (
  userData: JwtPayload,
  payload: { oldPassword: string; newPassword: string }
) => {
  // checking if the user is exist
  const user = await User.isUserExistsByCustomId(userData.userId);

  if (!user) {
    throw new AppError(404, "This User is Not Found!");
  }

  // checking if the user is already deleted
  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(404, "This User is Deleted");
  }

  // checking if the user is already blocked
  const userStatus = user?.status;
  if (userStatus === "blocked") {
    throw new AppError(404, "This User is Blocked");
  }

  // checking if the password is correct
  if (!(await User.isPasswordMatched(payload?.oldPassword, user?.password))) {
    throw new AppError(403, "Password do not Matched!");
  }

  // hash new password
  const newHashedPassword = await bcrypt.hash(payload.newPassword, Number(config.bcrypt_salt_rounds));

  await User.findOneAndUpdate(
    { id: userData.userId, role: userData.role },
    { password: newHashedPassword, needsPasswordChange: false, passwordChangeAt: new Date() }
  );
  return null;
};

export const AuthServices = {
  loginUser,
  changePassword,
};
