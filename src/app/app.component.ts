import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{  
  nombre: string = '';
  cif: string = '';
  direccion: string = '';
  grupo: number | string | undefined ;

  clienteArray: any[] = [];

  anadirDatos(): void{
    if (this.grupo == 0){
      this.grupo = 'Sin definir';
    }
    let clienteNuevo = {
      'nombre': this.nombre,
      'cif': this.cif,
      'direccion': this.direccion,
      'grupo': this.grupo
    }
    this.clienteArray.push(clienteNuevo);
  }

  eliminarDatos(): void{
    this.clienteArray.pop();
  }
}

