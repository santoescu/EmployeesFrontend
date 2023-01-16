import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../../Service/service.service";
import {Employee} from "../../Modelo/Employee";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  employee : Employee = {};
  constructor(private router:Router, private service:ServiceService) {}

  ngOnInit() {
  }
  add(employee:Employee){
    this.service.addEmployee(employee).subscribe(data=>{alert("Se agrego con exito");
      this.router.navigate(["listar"])
    })
  }

}
