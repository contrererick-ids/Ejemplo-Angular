import { Routes } from '@angular/router';
import { Home } from './pages/home/home'
import { Courses } from './pages/courses/courses'
import { CourseDetails } from './pages/courses/course-details/course-details'
import { NotFound } from './pages/errors/not-found/not-found';
import { Usuarios } from './pages/usuarios/usuarios';
import { ListaUsuarios } from './pages/usuarios/lista-usuarios/lista-usuarios';
import { DetalleUsuario } from './pages/usuarios/detalle-usuario/detalle-usuario';
import { CrearUsuario } from './pages/usuarios/crear-usuario/crear-usuario';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', redirectTo: '' },
    { path: 'cursos', component: Courses },
    { path: 'cursos/:id', component: CourseDetails },
    { path: 'usuarios', component: Usuarios, children:[
        { path: '', component: ListaUsuarios },
        { path: '/new', component: CrearUsuario },
        { path: ':id', component: DetalleUsuario }
    ]},
    { path: '**', component: NotFound }

];
