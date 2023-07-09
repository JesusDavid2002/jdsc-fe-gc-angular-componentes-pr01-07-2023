import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  // Recogemos el array del componente padre
  @Input() clienteArray: any[] = [];
  
}
