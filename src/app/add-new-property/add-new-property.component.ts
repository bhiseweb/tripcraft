import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { PropertiesService } from "../properties.service";


@Component({
  selector: 'app-add-new-property',
  templateUrl: './add-new-property.component.html',
  styleUrls: ['./add-new-property.component.scss']
})
export class AddNewPropertyComponent implements OnInit {

  constructor(private svc: PropertiesService) { }

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

	 saveProperty() {

	    this.svc.saveProperties(this.propertyForm.value).subscribe(data => {
	    	console.log('success');
	    });
	}

}
