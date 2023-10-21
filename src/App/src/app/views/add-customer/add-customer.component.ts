import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, map } from 'rxjs';

import { Country } from 'src/app/model/country';
import { CountryApiResponse } from 'src/app/model/country-api-response';
import { State } from 'src/app/model/state';
import { StateApiResponse } from 'src/app/model/state-api-response';

/**
 *  Add Customer
 *  adds new customer to the database
 *
 */
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerUrl = '/api/customers';
  countryUrl = '/api/countries';
  stateUrl = '/api/states';

  countries: Country[] = [];
  states: State[] = [];

  firstName: string = '';
  lastName: string = '';
  address: string = '';
  postal_code: string = '';
  phone: string = '';
  countryChoice: Country = new Country(0, "", {self: {href: ""}});
  stateChoice: State = new State(0, "", 0, {country: {href: ""}, self: {href: ""}});

  constructor(private http: HttpClient,
              private router: Router) {}

  ngOnInit(): void {
    this.getCountries().subscribe(countries => this.countries = countries);
    this.getStates().subscribe(states => this.states = states);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<CountryApiResponse>(this.countryUrl)
      .pipe(
        map(response => response._embedded.countries)
      )
  }

  getStates(): Observable<State[]> {
    return this.http.get<StateApiResponse>(this.stateUrl)
      .pipe(
        map(response => response._embedded.states)
      )
  }

  getStatesByCountryId(id: any): State[] {
    return this.states.filter(state => {
      return state.country_id == parseInt(id);
    });
  }

  onSubmit() {
    let customer = {
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      postal_code: this.postal_code,
      phone: this.phone,
      country: this.countryUrl + "/" + this.countryChoice,
      state: this.stateUrl + "/" + this.stateChoice
    }

    // post to customer
    this.http.post(this.customerUrl, customer).subscribe();

    this.router.navigate(["/customer"], ).then(() => {
      window.location.reload();
    });
  }

}
