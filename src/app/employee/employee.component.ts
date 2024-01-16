import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../types/employee';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

@Component({
	selector: 'app-employee',
	standalone: true,
	imports: [EmployeeTableComponent],
	templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
	employees = signal<Employee[]>([]);
	message = signal('');
	employeeService = inject(EmployeeService);

	ngOnInit(): void {
		this.employeeService.getEmployees().subscribe((employees) => {
			this.employees.set(employees);
			this.message.set('Loaded employees from server');

			setTimeout(() => {
				this.employees.set(employees.slice(0, 4));
				this.message.set('Removed one employee');
			}, 2000);
		});
	}
}
