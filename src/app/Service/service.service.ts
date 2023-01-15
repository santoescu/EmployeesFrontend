import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../Modelo/Employee";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  Url='/api/list';
  getall(){
    return this.http.get<Employee[]>(this.Url);
  }

}
