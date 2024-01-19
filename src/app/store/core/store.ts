import { computed, Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class Store<T> {
	private _data = signal<T | undefined>(undefined);
	data = computed(() => this._data());

	update(newData: T) {
		this._data.set(newData);
	}
}
