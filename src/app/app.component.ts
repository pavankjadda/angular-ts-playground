import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './features/employee/employee.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, EmployeeComponent, RouterLink],
	templateUrl: './app.component.html',
})
export class AppComponent {}
