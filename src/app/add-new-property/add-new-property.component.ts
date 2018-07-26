import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { PropertiesService } from "../properties.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-new-property',
  templateUrl: './add-new-property.component.html',
  styleUrls: ['./add-new-property.component.scss']
})
export class AddNewPropertyComponent implements OnInit {

  constructor(private svc: PropertiesService, private http: HttpClient) { }

  ngOnInit() {
  }

  	propertyForm:FormGroup = new FormGroup({
	    hotel_name:new FormControl(null,Validators.required),
	    property_type_id: new FormControl(1,Validators.required),
	    brand_id: new FormControl(3,Validators.required),
	    booking_partner_id: new FormControl(1,Validators.required),
	    property_status_id:new FormControl(1,Validators.required),
	})

	saveProperty() {

		const headers = new HttpHeaders()
	        .set('cache-control', 'no-cache')
	        .set('content-type', 'application/json')
	        .set('Jwt', localStorage.getItem('Jwt'))
	        .set('Tenant', '4')
	        .set('Username', 'test@tripcraft.com')
	        .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1');

	    this.http.post('https://propertyservicedevelopment.tripcraft.com/properties/', this.propertyForm.value, {headers:headers})
	    .subscribe(res =>{  
	      alert("property added Successfully");
      },
	    error=>{  
	      console.log("there was some error")});
	}

}
