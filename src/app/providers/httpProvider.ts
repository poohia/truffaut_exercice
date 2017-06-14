import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const CONTENT_TYPE_HEADER:string = 'Content-Type';
const APPLICATION_JSON:string = 'application/json';

@Injectable()
export class HttpProvider {
  base_url: string = "http://192.168.1.59:8080/";
   urls = {
     hello : this.base_url + "hello",
     isExist : this.base_url + "token/exist",
     plantes : this.base_url + "plante/get",
   };

   constructor(private http: Http)
   {

   }

   hello()
   {
      let requet = this.http.get(this.urls.hello);//.map(res => res.json());
      return requet;
   }
   isExist(token)
   {
     let searchParams = new URLSearchParams();
     searchParams.set('token', token);
     let options = new RequestOptions({ search: searchParams });
     let requet = this.http.get(this.urls.isExist, options);//.map(res => res.json());
     return requet;
   }

   getPlantes(token)
   {
       let searchParams = new URLSearchParams();
       searchParams.set('token', token);
       let options = new RequestOptions({ search: searchParams });
       let requet = this.http.get(this.urls.plantes, options);//.map(res => res.json());
       return requet;
   }

 }
