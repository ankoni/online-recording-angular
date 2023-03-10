import { Permission } from "./permission";

/** Модель авторизованного пользователя */
export type TUser = {
    name: string;
    permissions: Permission[];
}

export type AuthDto = {
  username: string;
  password: string;
}

export type UserResponse = {
  userId: string;
  username: string;
}
