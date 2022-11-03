import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  empleado : Empleado = new Empleado();
  constructor(private empleadoService:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
  }

  addEmpleado(){
    this.empleadoService.registrarEmpleado(this.empleado).subscribe(dato =>{
      console.log(dato);
      this.irALaListaDeEmpleados();
    },error => console.log(error));
  }
  
  irALaListaDeEmpleados(){
    this.router.navigate(["/empleados"]);
    swal('Empleado insertado',`El empleado ${this.empleado.nombre} ha sido insertado con exito`,`success`);
  }

  onSubmit(){
    this.addEmpleado();
  }
}
