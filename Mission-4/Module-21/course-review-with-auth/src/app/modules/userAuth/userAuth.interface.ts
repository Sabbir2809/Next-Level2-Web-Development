export interface IUser {
  username: string;
  email: string;
  password: string;
  passwordChangedAt: Date;
  passwordHistory: [{ password: string; timestamp: Date }];
  role: "user" | "admin";
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IChangePassword {
  currentPassword: string;
  newPassword: string;
}
