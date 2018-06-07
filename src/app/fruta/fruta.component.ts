import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: 'fruta.component.html'
})
export class FrutaComponent {
    public nombre_componente = 'Componente de frutas';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    public nombre:string;
    public edad:number = 48;
    public mayorEdad:boolean = true;
    public trabajos:Array<string> = ['Carpintero', 'Albañil', 'Fontanero'];
    public cosas:Array<any> = ['Carpintero', 4, 'Fontanero'];
    comodin:any = 'Cualquier cosa';

    constructor(){
        this.nombre = 'Alejandro González';
        console.log(this.nombre);
    }

    ngOnInit(){
        this.holaMundo(this.nombre);

        // Variables y alcance
        var uno = 8;
        var dos = 15;

        
    }

    holaMundo(nombre){
        alert('Hola Mundo!! ' + nombre);
    }
}