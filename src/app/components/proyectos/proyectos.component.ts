import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/s-proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  
  proyectos: Proyecto[] = [];

  constructor(private sProyecto: SProyectoService, private tokenService: TokenService) { }

  
  isLogged= false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged= false;
    }
  }

  cargarProyecto():void{
    this.sProyecto.lista().subscribe(
      data => {this.proyectos = data;}
    )
  }

  delete(id?:number){
    if(id!=undefined){
      this.sProyecto.delete(id).subscribe(
        data =>{
          this.cargarProyecto();
        }, err =>{
          alert("Error al borrar Experiencia");
        }
      )
    }
  }

  irEnlace(enlace:string){
    window.location.href = enlace;
  }

}
