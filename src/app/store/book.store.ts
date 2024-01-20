import { Injectable } from '@angular/core';
import { EntityStore } from './core/entity-store';
import { Book } from '../types/book';

@Injectable({
	providedIn: 'root',
})
export class BookStore extends EntityStore<Book> {
	constructor() {
		super();
	}
}
