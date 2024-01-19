import { Injectable } from '@angular/core';
import { Store } from './core/store';
import { ProgressState } from '../types/progress-state';

@Injectable({
	providedIn: 'root',
})
export class ProgressStore extends Store<ProgressState> {
	constructor() {
		super();
	}
}
