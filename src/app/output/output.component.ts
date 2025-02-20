import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  teacher: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.teacher = this.dataService.getTeacherData();
  }
}
