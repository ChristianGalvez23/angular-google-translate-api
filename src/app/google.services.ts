import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoogleService {
  constructor(private _http: HttpClient) {}

  translate(obj: GoogleObj, key: string) {
    return this._http.post(url + key, obj);
  }
}

const url = 'https://translation.googleapis.com/language/translate/v2?key=';

export class GoogleObj {
  q: string;
  readonly source: string = 'en';
  readonly target: string = 'es';
  readonly format: string = 'text';

  constructor() {}
}
