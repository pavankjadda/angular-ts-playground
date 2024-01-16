import { Component, effect, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Employee } from '../../types/employee';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-employee-table',
	standalone: true,
	imports: [ButtonModule, TableModule, ToastModule],
	providers: [MessageService],
	templateUrl: './employee-table.component.html',
})
export class EmployeeTableComponent {
	employees = input<Employee[]>([]);
	message = input<string>();
	messageService = inject(MessageService);

	constructor() {
		effect(() => {
			if (this.message()) this.messageService.add({ severity: 'success', summary: 'Success', detail: this.message() });
		});
	}
}
