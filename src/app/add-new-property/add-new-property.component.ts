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
	    propertytypeId: new FormControl(1,Validators.required),
	    brandId: new FormControl(2,Validators.required),
	    bookingpartnerId: new FormControl(1,Validators.required),
	    propertystatusId:new FormControl(1,Validators.required),
		description:new FormControl(null,Validators.required),
		number_of_rooms:new FormControl(null,Validators.required),
		main_phone:new FormControl(null,Validators.required),
		text_number:new FormControl(null,Validators.required),
		address_1:new FormControl(null,Validators.required),
		address_2:new FormControl(null,Validators.required),
		city:new FormControl(null,Validators.required),
		state_region:new FormControl(null,Validators.required),
		country:new FormControl(null,Validators.required),
		postal_code:new FormControl(null,Validators.required),
		metro_area:new FormControl(null,Validators.required),
		latitude:new FormControl(null,Validators.required),
		longitude:new FormControl(null,Validators.required),
		website:new FormControl(null,Validators.required),
		general:new FormControl(null,Validators.required),
		reservations_email:new FormControl(null,Validators.required),
		front_desk_email:new FormControl(null,Validators.required),
		timezone:new FormControl(null,Validators.required),
		check_in_time:new FormControl(null,Validators.required),
		check_out_time:new FormControl(null,Validators.required)
	})

	 saveProperty() {

	    this.svc.saveProperties(this.propertyForm.value).subscribe(data => {

	    });
	}

}
