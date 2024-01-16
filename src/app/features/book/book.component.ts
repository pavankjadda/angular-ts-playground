import { Component, inject, OnInit, signal } from '@angular/core';
import { Book } from '../../types/book';
import { BookService } from '../../services/book.service';
import { GenericStoreService } from '../../store/generic-store.service';
import { BookTableComponent } from './book-table/book-table.component';

@Component({
	selector: 'app-book',
	standalone: true,
	imports: [BookTableComponent],
	templateUrl: './book.component.html',
	styles: ``,
})
export class BookComponent implements OnInit {
	books = signal<Book[]>([]);
	message = signal('');
	bookService = inject(BookService);
	genericStoreService: GenericStoreService<Book> = inject(GenericStoreService);

	ngOnInit(): void {
		this.bookService.getBooks().subscribe((books) => {
			this.books.set(books);
			this.genericStoreService.setData(books);
			this.message.set('Loaded books from server');

			setTimeout(() => {
				this.books.set(books.slice(0, 4));
				this.genericStoreService.setData(books.slice(0, 4));
				this.message.set('Removed one book');
			}, 2000);
		});
	}
}
