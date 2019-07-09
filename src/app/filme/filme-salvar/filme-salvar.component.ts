import { Component, OnInit } from '@angular/core';
import { Filme } from '../entidade/filme';
import {AngularFireDatabase} from '@angular/fire/database';
@Component({
  selector: 'app-filme-salvar',
  templateUrl: './filme-salvar.component.html',
  styleUrls: ['./filme-salvar.component.scss'],
})
export class FilmeSalvarComponent implements OnInit {
  filme : Filme = new Filme();
  constructor(private fire : AngularFireDatabase) { }

  ngOnInit() {}

 salvar(){
   this.fire.list('comentario').push(this.filme);
   alert('Comentario salvo com sucesso!');
   this.filme = new Filme();


 }
}
