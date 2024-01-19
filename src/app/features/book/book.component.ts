import { Component, inject, OnInit, signal } from '@angular/core';
import { Book } from '../../types/book';
import { BookService } from '../../services/book.service';
import { GenericEntityStoreService } from '../../store/generic-entity-store.service';
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
	bookService = inject(BookService);
	genericEntityStoreService: GenericEntityStoreService<Book> = inject(GenericEntityStoreService);

	ngOnInit(): void {
		this.bookService.getBooks().subscribe((books) => {
			this.books.set(books);
			this.genericEntityStoreService.setData(books);
		});
	}
}
