import { User } from '../interfaces/user';

export interface RegistroUsuario extends User {
    password: string,
    confirm: string,
    accept: boolean
}
