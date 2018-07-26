import { Component, OnInit } from '@angular/core';
import { PropertiesService } from "../properties.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {

  url = '';

  private propertiesData: Array<any>;

  constructor(private svc: PropertiesService, private route:ActivatedRoute) {
    this.url= this.route.snapshot.params['url'];
  }

  ngOnInit() {
  	this.svc.getProperties(this.url).subscribe(data => {
      if(data.hasOwnProperty('items')){
        this.propertiesData = data['items'];
      }
    });
  }

}
