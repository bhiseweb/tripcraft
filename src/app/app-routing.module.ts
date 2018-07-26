import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenantDescriptionComponent } from './tenant-description/tenant-description.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { AddNewPropertyComponent } from './add-new-property/add-new-property.component';
const routes: Routes = [
	{path: '', component: TenantListComponent},
	{path: 'tenant-description/:id', component: TenantDescriptionComponent},
	{path: 'properties-list/:url', component: PropertiesListComponent},
	{path: 'add-new-property', component: AddNewPropertyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
