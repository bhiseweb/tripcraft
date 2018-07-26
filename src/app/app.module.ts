import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TenantDescriptionComponent } from './tenant-description/tenant-description.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { AddNewPropertyComponent } from './add-new-property/add-new-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPropertyComponent } from './edit-property/edit-property.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesListComponent,
    TenantDescriptionComponent,
    TenantListComponent,
    AddNewPropertyComponent,
    EditPropertyComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
