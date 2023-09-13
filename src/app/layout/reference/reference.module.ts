/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
/* Component */
import { ReferenceComponent } from './reference.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: ReferenceComponent
	}, {
		path: '**', component: ReferenceComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [ReferenceComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class ReferenceModule { }

