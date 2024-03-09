import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  standalone: true,
  imports: [],
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.css'
})
export class MiComponenteComponent {

  cambiar() {
    if(this.estado === "encendido"){
      this.estado = "apagado"
    }
    else{
      this.estado = "encendido"
    }
  }

  estado: string = "apagado"
}
