import { Permission } from "./permission";

/** Модель авторизованного пользователя */
export type TUser = {
    name: string;
    permissions: Permission[];
}
