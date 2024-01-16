import { Injectable, signal } from '@angular/core';
import { IdType } from '../types/id-type';

@Injectable({
	providedIn: 'root',
})
export class GenericStoreService<T extends IdType> {
	data = signal<T[]>([]);

	setData(data: T[]) {
		this.data.set(data);
	}

	updateData(data: T) {
		this.data.update((currentData) => {
			const dataMap = new Map(currentData.map((item) => [item['id'], item]));
			dataMap.set(data['id'], data);
			return Array.from(dataMap.values());
		});
	}

	updateMulti(data: T[]) {
		const dataMap = new Map(data.map((item) => [item['id'], item]));

		this.data.update((currentData) => {
			return currentData.map((item) => dataMap.get(item['id']) || item);
		});
	}
}
