import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { PropertiesService } from "../properties.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent implements OnInit {

	id = '';
	propertyData: any = {'hotel_name':''};

  constructor(private svc: PropertiesService, private route:ActivatedRoute, private http: HttpClient) { 
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
	    brand_id: new FormControl(3,Validators.required),
	    booking_partner_id: new FormControl(1,Validators.required),
	    property_status_id:new FormControl(1,Validators.required),
	})

	updateProperty() {

		const headers = new HttpHeaders()
	        .set('cache-control', 'no-cache')
	        .set('content-type', 'application/json')
	        .set('Jwt', localStorage.getItem('Jwt'))
	        .set('Tenant', '4')
	        .set('Username', 'test@tripcraft.com')
	        .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1');

	    this.http.patch('https://propertyservicedevelopment.tripcraft.com/properties/'+this.id, this.propertyForm.value, {headers:headers})
	    .subscribe(res =>{  
	      alert("property updated Successfully");
	    },
	    error=>{  
	      console.log("there was some error")});
	}

}
