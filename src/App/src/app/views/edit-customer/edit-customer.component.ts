import { HttpClient } from '@angular/common/http';

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, NgSelectOption, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, filter } from 'rxjs';

import { Country } from 'src/app/model/country';
import { CountryApiResponse } from 'src/app/model/country-api-response';
import { Customer } from 'src/app/model/customer';
import { State } from 'src/app/model/state';
import { StateApiResponse } from 'src/app/model/state-api-response';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})

export class EditCustomerComponent implements OnInit {

  customerUrl = '/api/customers';
  countryUrl = '/api/countries';
  stateUrl = '/api/states';

  countries: Country[] = [];
  states: State[] = [];
  filteredStates: State[] = [];

  customer: Customer = new Customer(0, '', '','','','', 0, {})
  countryChoice: Country = new Country(0, '', { self: { href: ''} });
  stateChoice: State = new State(0, '', 0, { country: { href: ''}, self: { href: '' }});

  constructor(
    private http: HttpClient,
    private router: Router,
    private form: FormBuilder,
    private changeDetect: ChangeDetectorRef
    ) { }

  ngOnInit(): void {

    // Parse customer Id
    this.customer.id = parseInt(this.router.url.split("/")[2])
    let url = this.customerUrl + "/" + this.customer.id

    // Load dropdowns
    this.getCountries().subscribe((countries) => {
      this.countries = countries;

      this.getStates().subscribe((states) => {
        this.states = states;

        // Load customer
        this.http.get<Customer>(url).subscribe((customer) => {
          this.customer = customer

          // Load state
          url += "/state";
          this.http.get<State>(url).subscribe((state) => {
            this.customer.state_id = state.id

            // Customer is fully loaded.
            console.table(this.customer)

            // Select current values from dropdowns
            this.filterStatesByCountry(state.country_id);
            let country = (this.getCountryById(state.country_id));

            this.countryChoice = country;
            this.stateChoice = state;

          });
        });
      });
    });
  }

  ngAfterContentChecked() {
    if( this.filteredStates.length > 0 ){
      this.form.control<string>('place')
    }
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

  getCountryById(id: number): Country {
    return this.countries.find(country => {
      return country.id == id
    }) ?? new Country(0,'',{ self: { href: '' } });
  }

  filterStatesByCountry(selectedCountry: any) {
    console.table(selectedCountry);
    this.filteredStates = this.states.filter(state => {
      return state.country_id == parseInt(selectedCountry);
    });
  }

  onSubmit() {
    let customer = {
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      address: this.customer.address,
      postal_code: this.customer.postal_code,
      phone: this.customer.phone,
      state: this.stateUrl + "/" + this.stateChoice.id
    }

    // this.http.put(this.customerUrl + "/" + this.customer.id, customer).subscribe();

    this.http.put(this.customerUrl + "/" + this.customer.id, customer).subscribe(
      response => {
        console.log("Customer updated successfully:", response);
      },
      error => {
        console.error("Error updating customer:", error);
      }
    );



    this.router.navigate(["/customer"], ).then(() => {
      window.location.reload();
    });
  }
}
