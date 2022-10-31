import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/s-proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyectos: Proyecto = null;

  constructor(private sProyecto: SProyectoService, private activatedRouted: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data=>{
        this.proyectos = data;
      }, err=>{
        alert("Error al modificar Proyecto");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate():void{
    const id = this.activatedRouted.snapshot.params['id'];
    this.sProyecto.update(id, this.proyectos).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar campos");
        this.router.navigate(['']);
      }
    )
  }
}
