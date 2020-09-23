import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { CharacterServiceService } from '../characters/character/character-service/character-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  checkoutForm;
  items;
  resultsSearch;
  ngOnInit() {
  }
  constructor(private formBuilder: FormBuilder, private characterService:CharacterServiceService, private router: Router
    ) {
    this.checkoutForm = this.formBuilder.group({
      name: ''
    });
  }
  
  onSubmit(customerData) {
    const name = customerData.name;    
    this.router.navigate(['/characters',name]);
  }

}
