import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Course } from '../../../shared/interfaces/course'
import { CourseService } from '../../../shared/services/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [],
  templateUrl: './course-details.html',
  styleUrl: './course-details.scss',
})

export class CourseDetails implements OnInit {

  private cursoId: number = 0;

  // No es private porque tenemos que enviarla la HTML
  course: Course = {
    name: '',
    description: ''
  }

  error = false;

  constructor (
    private ruta: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {
    this.ruta.params.subscribe(params=>{
      this.cursoId = params['id'];
      console.log('El nuevo id es: ' + this.cursoId);
    })
  }

  getCourse(){
    // HTTP: traer los datos del {this.cursoId}
    const curso = this.courseService.getCurso();
    if(this.cursoId == curso.id){
      this.course = curso;
    } else {
      this.error = true;
      this.router.navigate(['..'], {
        relativeTo: this.ruta
      })
    }

  }

  ngOnInit() {
    console.log('El componente se inicializa');
    this.getCourse();

  }

}
