import { Component } from '@angular/core';
import { Course } from '../../shared/interfaces/course';
import { RouterModule } from '@angular/router';
import { CourseService } from '../../shared/services/course';

@Component({
  selector: 'app-courses',
  imports: [RouterModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
  cursos: Course[] = [
    { id: 1, name: 'Primer Curso', description: 'Lorem ipsum dolor sit amet'},
    { id: 2, name: 'Segundo Curso', description: 'Lorem ipsum dolor sit amet'},
    { id: 3, name: 'Tercer Curso', description: 'Lorem ipsum dolor sit amet'},
  ]

  constructor(private courseService: CourseService){

  }

  setCursoSeleccionado(curso: Course){
    console.log('Vamos a guardar el curso: ', curso);
    this.courseService.setCurso(curso);
  }

}
