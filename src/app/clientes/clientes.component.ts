import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { CLIENTES } from './clientes.json';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  clientes: Cliente[];
  

  constructor(private clienteService: ClienteService){
     this.clienteService = clienteService;
     this.clientes = this.clienteService.getClientes();
  }
  
 
}