import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  Uri: string = `${environment.TutorshipService}/course`;
  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.get(`${this.Uri}`);
  }
  getCourseById(id) {
    return this.http.get(`${this.Uri}/${id}`);
  }
  deleteCourseById(id) {
    return this.http.delete(`${this.Uri}/${id}`);
  }
  createCourse(body) {
    return this.http.post(`${this.Uri}`, body);
  }
  updateCourse(body, id) {
    return this.http.put(`${this.Uri}/${id}`, body);
  }
}
