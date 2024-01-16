import { Component, effect, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MessageService, SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Book } from '../../../types/book';
import { GenericStoreService } from '../../../store/generic-store.service';

@Component({
	selector: 'app-book-table',
	standalone: true,
	imports: [ButtonModule, SharedModule, TableModule, ToastModule],
	templateUrl: './book-table.component.html',
	providers: [MessageService],
})
export class BookTableComponent {
	genericStoreService: GenericStoreService<Book> = inject(GenericStoreService);
	books = this.genericStoreService.data;
	messageService = inject(MessageService);

	constructor() {
		effect(() => {
			this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Loaded books from server' });
			setTimeout(() => {
				this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Removed one book' });
			}, 2000);
		});
	}
}
