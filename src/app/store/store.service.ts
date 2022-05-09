import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StoreService {
  constructor() {}

  getItemsFromLocalStorage(): number[] {
    const items = localStorage.getItem('items');
    if (items) {
      return JSON.parse(items);
    }
    return [1, 2, 3];
  }

  persitItemsToLocalStorage(items: number[]): void {
    localStorage.setItem('items', JSON.stringify(items));
  }
}
