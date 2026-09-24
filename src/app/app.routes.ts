import { Routes } from '@angular/router';
import { Home } from './pages/home/home'
import { Courses } from './pages/courses/courses'
import { CourseDetails } from './pages/courses/course-details/course-details'
import { NotFound } from './pages/errors/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', redirectTo: '' },
    { path: 'cursos', component: Courses },
    { path: 'cursos/:id', component: CourseDetails },
    { path: '**', component: NotFound }

];
