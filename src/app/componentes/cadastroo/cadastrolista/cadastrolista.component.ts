import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Cadastro } from '../entidade/cadastro';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'cadastrolista-component',
  templateUrl: 'cadastrolista.component.html'

})

export class CadastrolistaComponent implements OnInit {

  usuarioLista: Observable<Cadastro[]>;
  listaFiltro: Cadastro[];
  filtro = {}; //regras ativas do filtro
  cadastros: any;
  nome: string;

  constructor(private fire: AngularFireDatabase) {
this.usuarioLista = this.fire.list<Cadastro>('usuario')
 .snapshotChanges().pipe(  map( lista => lista.map( linha => ({ key: linha.payload.key, ... linha.payload.val() })))
  );
}

  ngOnInit() {
     this.usuarioLista.subscribe(cadastro => {
        this.cadastros = cadastro;
        this.listaFiltro = _.filter(this.cadastros, _.conforms(this.filtro));
    })
  }

  filtrar(){
    this.filtro['nome'] = val => val.includes(this.nome);
    this.listaFiltro = _.filter(this.cadastros, _.conforms(this.filtro));
  }


  excluir(key){
    this.fire.list('usuario').remove(key);
    alert("excluido");
}
}
