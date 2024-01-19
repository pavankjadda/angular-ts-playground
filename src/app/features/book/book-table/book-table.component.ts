import { Component, effect, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MessageService, SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Book } from '../../../types/book';
import { GenericEntityStoreService } from '../../../store/generic-entity-store.service';

@Component({
	selector: 'app-book-table',
	standalone: true,
	imports: [ButtonModule, SharedModule, TableModule, ToastModule],
	templateUrl: './book-table.component.html',
	providers: [MessageService],
})
export class BookTableComponent {
	genericStoreService: GenericEntityStoreService<Book> = inject(GenericEntityStoreService);
	books = this.genericStoreService.data;
	messageService = inject(MessageService);

	constructor() {
		effect(() => {
			this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Loaded books from server' });
			setTimeout(() => {
				this.messageService.add({ key: 'bc', severity: 'warn', summary: 'Success', detail: 'Removed one book' });
			}, 2000);
		});
	}

	updateBook() {
		this.genericStoreService.updateData({
			id: 1,
			title: 'TS Essentials',
			isbn: '8488-4888-4888-222-4',
			author: 'PJ',
		} as Book);
		this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Updated Book with ID: 1' });
	}
}
