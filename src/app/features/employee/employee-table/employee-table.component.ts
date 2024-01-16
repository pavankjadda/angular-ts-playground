import { Component, effect, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { GenericStoreService } from '../../../store/generic-store.service';

@Component({
	selector: 'app-employee-table',
	standalone: true,
	imports: [ButtonModule, TableModule, ToastModule],
	providers: [MessageService],
	templateUrl: './employee-table.component.html',
})
export class EmployeeTableComponent {
	employees = inject(GenericStoreService).data;
	messageService = inject(MessageService);

	constructor() {
		effect(() => {
			this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Loaded employees from server' });
			setTimeout(() => {
				this.messageService.add({ key: 'bc', severity: 'warn', summary: 'Success', detail: 'Removed one employee' });
			}, 2000);
		});
	}
}
