import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];
  
  constructor() { }

  ngOnInit(): void {
    this.empleados=[{
      "id":2,
      "nombre" : "Christian",
      "apellido" : "Marinez",
      "email" : "cm@gmail.com"
    },
    {
      "id":3,
      "nombre" : "Julian",
      "apellido" : "Ramirez",
      "email" : "jr@gmail.com"
    }
    ];
  }

}
