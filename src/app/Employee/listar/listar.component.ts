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
   public page:number;
  constructor(private service:ServiceService,private router:Router) {}
  ngOnInit() {
    this.service.getall().subscribe(data =>{
      this.employees=data;
    })
  }
  delete(employee:Employee){
    let r = confirm("¿Está seguro de que desea eliminar el empleado?");
    if (r == true) {
      this.service.deleteEmployee(employee.id).subscribe(data=>{
        this.employees=this.employees.filter(e=>e!==employee);
      })
    }

  }
}
