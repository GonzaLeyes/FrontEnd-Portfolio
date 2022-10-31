import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/services/image.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent implements OnInit {
  persona: persona = null;

  constructor(private personaService: PersonaService, private activatedRouted: ActivatedRoute,
    private router: Router, public imgService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data=>{
        this.persona = data;
      }, err=>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouted.snapshot.params['id'];
    this.persona.img = this.imgService.url;
    this.personaService.update(id, this.persona).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar campos");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouted.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imgService.uploadImage($event, name);

  }
}
