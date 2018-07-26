import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { PropertiesService } from "../properties.service";

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent implements OnInit {

	id = '';
	propertyData: any = {'hotel_name':''};

  constructor(private svc: PropertiesService, private route:ActivatedRoute) { 
  	this.id = this.route.snapshot.params['id'];

  	this.svc.getProperty(this.id).subscribe(data => {
		this.propertyData = data;
    });

  }

  ngOnInit() {
  	
  }

  	propertyForm:FormGroup = new FormGroup({
	    hotel_name:new FormControl(null,Validators.required),
	    property_type_id: new FormControl(1,Validators.required),
	    brand_id: new FormControl(2,Validators.required),
	    booking_partner_id: new FormControl(1,Validators.required),
	    property_status_id:new FormControl(1,Validators.required),
		description:new FormControl(null,Validators.required),
	})


	updateProperty() {

	    this.svc.updateProperty(this.propertyForm.value, this.id).subscribe(data => {
	    	console.log('success');
	    });
	}

}
