import { Component, effect, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MessageService, SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Book } from '../../../types/book';

@Component({
	selector: 'app-book-table',
	standalone: true,
	imports: [ButtonModule, SharedModule, TableModule, ToastModule],
	templateUrl: './book-table.component.html',
	providers: [MessageService],
})
export class BookTableComponent {
	books = input<Book[]>([]);
	message = input<string>();
	messageService = inject(MessageService);

	constructor() {
		effect(() => {
			if (this.message()) this.messageService.add({ severity: 'success', summary: 'Success', detail: this.message() });
		});
	}
}
