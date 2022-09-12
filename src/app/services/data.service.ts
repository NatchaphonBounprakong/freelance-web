import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getFakeApi() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(concatMap(val => {
      return this.http.get("https://dummyjson.com/products/1")
    })).subscribe(o => {
      console.log(o)
    })

    this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(mergeMap(val => {
      return this.http.get("https://dummyjson.com/products/1")
    })).subscribe(o => {
      console.log(o)
    })
  }

}
