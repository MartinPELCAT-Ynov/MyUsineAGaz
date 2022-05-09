import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { StoreService } from './store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'MyUsineAGaz';

  items: Array<number> = [];

  chars: Array<any> = [];

  constructor(
    private storeService: StoreService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.items = this.storeService.getItemsFromLocalStorage();
    this.httpService.getCharacters().subscribe((chars) => {
      this.chars = chars.results;
      console.log(chars);
    });
  }

  itemKilled(number: number) {
    this.items = this.items.filter((item) => item !== number);
    this.storeService.persitItemsToLocalStorage(this.items);
  }
}
