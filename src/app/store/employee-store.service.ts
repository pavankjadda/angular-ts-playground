import { Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class EmployeeStoreService<T> {
	employees = signal<T[]>([]);

	updateEmployees(employees: T[]) {
		this.employees.set(employees);
	}
}
