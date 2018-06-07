import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
    public titulo = 'Componente Empleados';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;

    constructor(){
        this.empleado =  new Empleado('David López', 45, 'Cocinero', true);
        this.trabajadores = [
            new Empleado('David López', 45, 'Cocinero', true),
            new Empleado('Alejandro', 45, 'Administrativo', true),
            new Empleado('Romila', 45, 'Programador', false)
        ];

        this.trabajador_externo = false;
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }
}