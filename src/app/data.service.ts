import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private teacherData: any = {};

  setTeacherData(data: any) {
    this.teacherData = data;
  }

  getTeacherData() {
    return this.teacherData;
  }
}
