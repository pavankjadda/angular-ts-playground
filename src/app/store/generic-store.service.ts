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

	/**
	 * Update an item in the store. If the item does not exist in new list, add it. Otherwise, update it.
	 *
	 * @param data The item to added or updated
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.0.0
	 */
	updateData(data: T) {
		this.data.update((currentData) => {
			const dataMap = new Map(currentData.map((item) => [item.id, item]));
			dataMap.set(data.id, data);
			return Array.from(dataMap.values());
		});
	}

	/**
	 * Update multiple items in the store. If the item does not exist in new list, delete it. Otherwise, update it.
	 * @param data The new list of items
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.0.0
	 */
	updateMulti(data: T[]) {
		this.data.set(data);
	}
}
