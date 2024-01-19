import { Component, inject, OnInit, signal } from '@angular/core';
import { Book } from '../../types/book';
import { BookService } from '../../services/book.service';
import { EntityStore } from '../../store/entity-store';
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
	bookEntityStore: EntityStore<Book> = inject(EntityStore);

	ngOnInit(): void {
		this.bookService.getBooks().subscribe((books) => {
			this.books.set(books);
			this.bookEntityStore.setData(books);
		});
	}
}
