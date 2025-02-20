import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  imports: [
    FormsModule,
    NgOptimizedImage
  ]
})
export class InputComponent {
  teacher: any = {};
  imageSrc(): string{
    return 'images/image.png';
  }

  constructor(private dataService: DataService, private router: Router) {}

  onSubmit() {
    this.dataService.setTeacherData(this.teacher);
    this.router.navigate(['/output']);
  }
}

