import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../types/employee';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { GenericEntityStoreService } from '../../store/generic-entity-store.service';
import { GenericStoreService } from '../../store/generic-store.service';
import { ProgressState } from '../../types/progress-state';

@Component({
	selector: 'app-employee',
	standalone: true,
	imports: [EmployeeTableComponent],
	templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
	employeeService = inject(EmployeeService);
	entityStoreService: GenericEntityStoreService<Employee> = inject(GenericEntityStoreService);
	progressService: GenericStoreService<ProgressState> = inject(GenericStoreService);

	ngOnInit(): void {
		this.progressService.update({
			isLoading: true,
			isSuccess: false,
			isError: false,
			message: 'Loading employees...',
		});

		this.employeeService.getEmployees().subscribe((employees) => {
			setTimeout(() => {
				this.progressService.update({
					isLoading: false,
					isSuccess: true,
					isError: false,
					message: 'Employees loaded.',
				});
				this.entityStoreService.setData(employees);
			}, 2000);
		});
	}
}
