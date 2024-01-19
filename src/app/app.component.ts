import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './features/employee/employee.component';
import { AsyncPipe } from '@angular/common';
import { ProgressStore } from './store/progress.store';
import { ProjectStore } from './store/project.store';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, EmployeeComponent, RouterLink, AsyncPipe],
	templateUrl: './app.component.html',
})
export class AppComponent {
	projectStore = inject(ProjectStore);
	progressStore = inject(ProgressStore);
	protected readonly JSON = JSON;

	constructor() {
		this.projectStore.update({ id: 1 });
	}
}
