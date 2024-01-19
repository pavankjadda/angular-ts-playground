import { Injectable } from '@angular/core';
import { Employee } from '../types/employee';
import { EntityStore } from './core/entity-store';

@Injectable({
	providedIn: 'root',
})
export class EmployeeStore extends EntityStore<Employee> {
	constructor() {
		super();
	}
}
