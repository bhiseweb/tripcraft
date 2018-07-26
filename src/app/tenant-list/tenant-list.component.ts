import { Component, OnInit } from '@angular/core';
import { PropertiesService } from "../properties.service";

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss']
})

export class TenantListComponent implements OnInit {

  private tenantData: Array<any>;

  constructor(private svc: PropertiesService) { }

  ngOnInit() {

   this.svc.getTenants()
    .subscribe(
      data=>{
        if(data.hasOwnProperty('items')){
          this.tenantData= data['items'];
        } 
        console.log(this.tenantData)},
        error=>{
          console.log("Oooops Something Went Wrong.....")
        }
    )

  }
}

