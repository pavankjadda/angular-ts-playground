import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, EmployeeComponent],
	templateUrl: './app.component.html',
})
export class AppComponent {}
