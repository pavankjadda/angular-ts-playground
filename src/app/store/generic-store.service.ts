import { Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class GenericStoreService<T> {
	data = signal<T[]>([]);

	setData(data: T[]) {
		this.data.set(data);
	}
}
