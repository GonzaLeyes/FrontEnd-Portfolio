import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string='';
  descripcionP: string='';
  enlaceP: string='';

  constructor(private sProyecto: SProyectoService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const proyectos = new Proyecto(this.nombreP,this.descripcionP,this.enlaceP);
    this.sProyecto.save(proyectos).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }

}
