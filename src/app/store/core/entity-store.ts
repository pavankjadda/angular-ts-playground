import { computed, Injectable, signal } from '@angular/core';
import { IdType } from '../../types/id-type';

@Injectable({
	providedIn: 'root',
})
export class EntityStore<T extends IdType> {
	_data = signal<T[]>([]);
	data = computed(() => this._data());

	findById(id: number) {
		return this._data().find((item) => item.id === id);
	}

	setData(data: T[]) {
		this._data.set(data);
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
		this._data.update((currentData) => {
			const dataMap = new Map(currentData.map((item) => [item.id, item]));
			dataMap.set(data.id, data);
			return Array.from(dataMap.values());
		});
	}
}
