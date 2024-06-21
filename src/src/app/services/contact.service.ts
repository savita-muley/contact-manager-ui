import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactData } from '../models/contact-data';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = `${environment.APIBaseUrl}/contacts`;

  constructor(private http: HttpClient) { }

  getAllContacts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  addContact(contact: ContactData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, contact);
  }

  updateContact(contactId: number, contact: ContactData): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${contactId}`, contact);
  }

  deleteContact(contactId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${contactId}`);
  }
}
