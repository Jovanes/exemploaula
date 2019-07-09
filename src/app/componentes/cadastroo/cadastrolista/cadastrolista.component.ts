import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Cadastro } from '../entidade/cadastro';
import {map} from 'rxjs/operators';

@Component({
  selector: 'cadastrolista-component',
  templateUrl: 'cadastrolista.component.html'

})
export class CadastrolistaComponent implements OnInit {

  usuarioLista: Observable<Cadastro[]>;

  constructor(private fire: AngularFireDatabase) {
this.usuarioLista = this.fire.list<Cadastro>('usuario')
 .snapshotChanges().pipe(
   map( lista => lista.map( linha => ({
     key: linha.payload.key, ... linha.payload.val()
   })
 ))
 );
}
  ngOnInit() {
  }

}
