import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../types/employee';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EntityStore } from '../../store/core/entity-store';
import { ProgressState } from '../../types/progress-state';
import { ProgressStore } from '../../store/progress.store';

@Component({
	selector: 'app-employee',
	standalone: true,
	imports: [EmployeeTableComponent],
	templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
	employeeService = inject(EmployeeService);
	entityStoreService: EntityStore<Employee> = inject(EntityStore);
	progressStore = inject(ProgressStore);

	ngOnInit(): void {
		this.progressStore.update({
			isLoading: true,
			isSuccess: false,
			isError: false,
			message: 'Loading employees...',
		} as ProgressState);
		this.employeeService.getEmployees().subscribe((employees) => {
			setTimeout(() => {
				this.progressStore.update({
					isLoading: false,
					isSuccess: true,
					isError: false,
					message: 'Employees loaded.',
				} as ProgressState);
				this.entityStoreService.setData(employees);
			}, 2000);
		});
	}
}
