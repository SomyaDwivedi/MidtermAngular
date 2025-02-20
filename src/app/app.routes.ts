import { Routes } from '@angular/router';
import {OutputComponent} from './output/output.component';
import {InputComponent} from './input/input.component';

export const routes: Routes = [
  {path: 'input', component: InputComponent},
  {path: 'output', component: OutputComponent},
  {path: '', redirectTo: 'input', pathMatch: 'full'},
  {path: '**', redirectTo:'input'}
];
