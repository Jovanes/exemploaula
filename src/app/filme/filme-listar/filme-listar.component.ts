import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Filme } from '../entidade/filme';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-filme-listar',
  templateUrl: './filme-listar.component.html',
  styleUrls: ['./filme-listar.component.scss'],
})
export class FilmeListarComponent implements OnInit {
  filmeLista: Observable<Filme[]>;

  constructor(private fire: AngularFireDatabase) {
this.filmeLista = this.fire.list<Filme>('comentario')
 .snapshotChanges().pipe(
   map( lista => lista.map( linha => ({
     key: linha.payload.key, ... linha.payload.val()
   })
 ))
 );
}


  ngOnInit() {}

}
