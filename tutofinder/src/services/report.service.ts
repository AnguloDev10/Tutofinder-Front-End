import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  Uri: string = `${environment.TutorshipService}/report`;
  constructor(private http: HttpClient) {}

  getAllReports() {
    return this.http.get(`${this.Uri}`);
  }
  getReportById(id) {
    return this.http.get(`${this.Uri}/${id}`);
  }
  deleteReportById(id) {
    return this.http.delete(`${this.Uri}/${id}`);
  }
  createReport(body) {
    return this.http.post(`${this.Uri}`, body);
  }
  updateCourse(body, id) {
    return this.http.put(`${this.Uri}/${id}`, body);
  }
}
