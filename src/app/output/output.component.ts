import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
  imports: [
    RouterLink,
    NgOptimizedImage
  ]
})
export class OutputComponent implements OnInit {
  teacher: any = {};
  imageSrc(): string{
    return 'images/image.png';
  }
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.teacher = this.dataService.getTeacherData();
  }
}
