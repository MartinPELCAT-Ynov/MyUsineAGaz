import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private client: HttpClient) {}

  getCharacters() {
    return this.client.get<any>('https://rickandmortyapi.com/api/character');
  }
}
