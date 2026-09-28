export interface User {
    // Se deja opcional porque cuando se crea el usuario aun no tiene id o este lo mandará la base de datos
    id?: number;
    name: string;
    email: string;
    age?: number;
}
