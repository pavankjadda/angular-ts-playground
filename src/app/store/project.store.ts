import { Injectable } from '@angular/core';
import { Store } from './core/store';
import { Project } from '../types/project';

@Injectable({
	providedIn: 'root',
})
export class ProjectStore extends Store<Project> {
	constructor() {
		super();
	}
}
