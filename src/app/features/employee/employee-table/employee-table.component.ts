import { Component, effect, inject, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { GenericEntityStoreService } from '../../../store/generic-entity-store.service';
import { Employee } from '../../../types/employee';
import { GenericStoreService } from '../../../store/generic-store.service';
import { ProgressState } from '../../../types/progress-state';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
	selector: 'app-employee-table',
	standalone: true,
	imports: [ButtonModule, TableModule, ToastModule, ProgressBarModule],
	providers: [MessageService],
	templateUrl: './employee-table.component.html',
})
export class EmployeeTableComponent {
	genericEntityStoreService: GenericEntityStoreService<Employee> = inject(GenericEntityStoreService);
	loadingState: Signal<ProgressState> = inject(GenericStoreService).data;
	employees = this.genericEntityStoreService.data;
	messageService = inject(MessageService);

	constructor() {
		effect(() => {
			this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Loaded employees from server' });
			setTimeout(() => {
				this.genericEntityStoreService.setData(this.employees().slice(0, 4));
				this.messageService.add({ key: 'bc', severity: 'warn', summary: 'Success', detail: 'Removed one employee' });
			}, 2000);
		});
	}

	updateEmployee() {
		this.genericEntityStoreService.updateData({
			id: 1001,
			firstName: 'Pavan Kumar',
			lastName: 'Jadda',
			email: 'pj@exampl.eocm',
			phone: '994-499-4499',
			age: 23,
		} as Employee);

		this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: `Updated employee with ID: 1001` });
	}
}
