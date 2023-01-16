import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../Modelo/Employee";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }

  getall(){
    return this.http.get<Employee[]>('/api/list');
  }

  addEmployee(employee:Employee){
    return this.http.post<Employee>('/api/save-employee',employee);
  }

  deleteEmployee(id: number | undefined){
    return this.http.delete<any>('/api/delete-employee/'+id);
  }



}
