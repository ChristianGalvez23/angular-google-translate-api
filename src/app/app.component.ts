import { Component, OnInit } from '@angular/core';
import { GoogleService, GoogleObj } from './google.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GoogleService]
})
export class AppComponent implements OnInit {
  public googleObj: GoogleObj = new GoogleObj();
  public key: string;
  public result = '';
  private btnSubmit: any;

  constructor(private _google: GoogleService) {}

  ngOnInit() {
    this.btnSubmit = document.getElementById('btnSubmit');
  }

  send() {
    this.btnSubmit.disabled = true;
    this._google.translate(this.googleObj, this.key).subscribe(
      (res: any) => {
        this.btnSubmit.disabled = false;
        this.result = res.data.translations[0].translatedText;
      },
      err => {
        console.log(err);
      }
    );
  }
}
