import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }
}
