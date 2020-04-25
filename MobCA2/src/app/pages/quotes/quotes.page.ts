import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ApiService} from '../../services/api.service';

export enum SearchType{
    all='',
    quote_id = 'quote_id',   
    author = 'author',
    random = 'random',
    random_author = 'random_author'
}

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})

export class QuotesPage implements OnInit {

  quotes: Observable<any>;
  searchTerm='';
  type : SearchType = SearchType.all;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
     this.quotes = this.api.getQuotes();
     this.quotes.subscribe(data=>{
         console.log('My data: ',data)
     })
  }

 openDetails(quote) {
      let quoteId = quote.quote_id;  
      this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
  }

 searchChanges(){
      this.quotes = this.api.searchDataQuote(this.searchTerm, this.type);
      this.quotes.subscribe(data=>{
         console.log('My data: ',data)
     })

  } 

}
