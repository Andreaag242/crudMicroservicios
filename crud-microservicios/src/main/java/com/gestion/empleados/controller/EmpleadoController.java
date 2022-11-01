package com.gestion.empleados.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.empleados.model.Empleado;
import com.gestion.empleados.repository.EmpleadoRepository;

@RestController
@RequestMapping("/api")
public class EmpleadoController {

	@Autowired
	private EmpleadoRepository repository;
	
	@GetMapping("/empleados")
	public List<Empleado> listarTodosLosEmpleados(){
		return repository.findAll();
	}
}
