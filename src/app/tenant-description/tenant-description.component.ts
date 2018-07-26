import { Component, OnInit } from '@angular/core';
import { PropertiesService } from "../properties.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tenant-description',
  templateUrl: './tenant-description.component.html',
  styleUrls: ['./tenant-description.component.scss']
})
export class TenantDescriptionComponent implements OnInit {

  id = '';
  private tenantServices: Array<any>;

  constructor(private svc: PropertiesService, private route:ActivatedRoute) {
    
  	this.id = this.route.snapshot.params['id'];

  	this.svc.getTenant(this.id).subscribe((data) => {
      if(data.hasOwnProperty('services')){
  		  this.tenantServices = data['services'];
      }
    });

  }

  ngOnInit() {
  }

}
