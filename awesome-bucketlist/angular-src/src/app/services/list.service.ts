import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { List } from '../models/List';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/bucketlist';

  constructor(
    private http: HttpClient,
  ) { }

  getAllLists (): Observable<List[]> {
    return this.http.get<List[]>(this.apiUrl);
  }

  deleteList (listId: string): Observable<List> {
    const url = `${this.apiUrl}/${listId}`;

    return this.http.delete<List>(url, httpOptions);
  }

  public addList(list: List) {
     const body = JSON.stringify({title: list.title, description: list.description, category: list.category});
     console.log(body);
    return this.http.post(this.apiUrl, body , httpOptions);
  }
}

