import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Contact {

  private formUrl = 'https://formspree.io/f/xeedjqwr'; // 👈 paste YOUR Formspree URL here

  constructor(private http: HttpClient) { }

  sendMessage(data: any) {
    return this.http.post(this.formUrl, data);
  }
}
