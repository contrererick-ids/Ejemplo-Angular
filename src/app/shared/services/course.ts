import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  private currentCourse: Course = {
    name: '',
    description: ''
  }

  setCurso(curso: Course){
    this.currentCourse = curso;
    localStorage.setItem('curso', JSON.stringify(curso));

  }

  getCurso():Course {
    if (this.currentCourse.name){
      return this.currentCourse;
    }
    
    const cursoItem = localStorage.getItem('curso');
    const curso = JSON.parse(cursoItem || '');
    // Alternativa:
    //const curso = cursoItem ? JSON.parse(cursoItem) : {name: '', description: ''};
    
    if(curso){
      this.setCurso(curso);
      return this.currentCourse;
    }
    
    return this.currentCourse;
  
  }

}
