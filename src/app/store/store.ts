import { computed, Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class Store<T> {
	_data = signal<T | undefined>(undefined);
	data = computed(() => this._data());

	update(data: T) {
		this._data.set(data);
	}
}
