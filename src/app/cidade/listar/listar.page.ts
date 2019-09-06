import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

import { Estado } from '../../estado/entidade/estado';
import { Cidade } from '../entidade3/cidade';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  cidade : Cidade = new Cidade();

    listaCidade: Observable<Cidade[]>;
constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaCidade = this.fire.list<Cidade>('cidade').snapshotChanges().pipe(

map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))

);
}
  ngOnInit() {}

}
