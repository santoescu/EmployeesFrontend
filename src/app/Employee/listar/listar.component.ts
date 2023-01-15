import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../../Service/service.service";
import {Employee} from "../../Modelo/Employee";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{
   employees:Employee[];
  constructor(private service:ServiceService,private router:Router) {}
  ngOnInit() {
    this.service.getall().subscribe(data =>{
      this.employees=data;
    })
  }
}
