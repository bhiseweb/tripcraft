import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http: HttpClient) { }

  	getTenants(){


		const headers = new HttpHeaders()
	        .set('cache-control', 'no-cache')
	        .set('content-type', 'application/json')
	        .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1');

	    const body = {
	        email: 'test@tripcraft.com',
	        password: 'Tripcraft_001',
	        subdomain: 'tripcraft'
	    }

	    this.http
	        .post('https://tenantservicedevelopment.tripcraft.com/api/account/sign_in', body, { headers: headers })
	        .subscribe(res => {
	        	localStorage.setItem('Jwt', res['access_token'])
	    });



	    return this.http.get('https://tenantservicedevelopment.tripcraft.com/api/tenants/',{
	      observe:'body',
	      headers:new HttpHeaders({'Content-Type':'application/json', 'Cache-Control': 'no-cache', 'Jwt': localStorage.getItem('Jwt'), 'Tenant': '4', 'Username': 'test@tripcraft.com'})
	    });

	}


	getProperties(url:any){
	    return this.http.get(url+'/properties',{
	      observe:'body',
	      headers:new HttpHeaders({'Content-Type':'application/json', 'Cache-Control': 'no-cache', 'Jwt': localStorage.getItem('Jwt'), 'Tenant': '4', 'Username': 'test@tripcraft.com'})
	    });
	}

	getProperty(id:any){
	    return this.http.get('https://propertyservicedevelopment.tripcraft.com/properties'+id,{
	      observe:'body',
	      headers:new HttpHeaders({'Content-Type':'application/json', 'Cache-Control': 'no-cache', 'Jwt': localStorage.getItem('Jwt'), 'Tenant': '4', 'Username': 'test@tripcraft.com'})
	    });
	}

	getTenant(id:any){
		return this.http.get('https://tenantservicedevelopment.tripcraft.com/api/tenants/'+id,{
	      observe:'body',
	      headers:new HttpHeaders({'Content-Type':'application/json', 'Cache-Control': 'no-cache', 'Jwt': localStorage.getItem('Jwt'), 'Tenant': '4', 'Username': 'test@tripcraft.com'})
	    });
	}

	saveProperties(formData:any){

		const headers = new HttpHeaders()
	        .set('cache-control', 'no-cache')
	        .set('content-type', 'application/json')
	        .set('Jwt', localStorage.getItem('Jwt'))
	        .set('Tenant', '4')
	        .set('Username', 'test@tripcraft.com')
	        .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1');

  		this.http.post('https://propertyservicedevelopment.tripcraft.com/properties/', formData, { headers: headers }).subscribe(res => console.log(res));
	}

	updateProperty(formData:any, id:any){

		const headers = new HttpHeaders()
	        .set('cache-control', 'no-cache')
	        .set('content-type', 'application/json')
	        .set('Jwt', localStorage.getItem('Jwt'))
	        .set('Tenant', '4')
	        .set('Username', 'test@tripcraft.com')
	        .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1');

	    this.http
	        .patch('https://propertyservicedevelopment.tripcraft.com/properties/'+id, formData, { headers: headers })
	        .subscribe(res => {
	        	return res;
	    });
	}

}
