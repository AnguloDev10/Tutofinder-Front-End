import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  Uri: string = `${environment.CustomerService}/student`;
  constructor(private http: HttpClient) {}

  createStudent(body) {
    return this.http.post(`${this.Uri}`, body);
  }
  getAllStudents() {
    return this.http.get(`${this.Uri}`);
  }
  getStudentById(id) {
    return this.http.get(`${this.Uri}/${id}`);
  }
  deleteStudentById(id) {
    return this.http.delete(`${this.Uri}/${id}`);
  }

  updateStudent(body, id) {
    return this.http.put(`${this.Uri}/${id}`, body);
  }
}
