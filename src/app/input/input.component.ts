import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  teacher: any = {}; // Initialize teacher object

  constructor(private dataService: DataService, private router: Router) {}

  onSubmit() {
    this.dataService.setTeacherData(this.teacher);
    this.router.navigate(['/output']);
  }
}
