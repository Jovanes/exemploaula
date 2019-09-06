import { Component, OnInit} from '@angular/core';
import { Cadastro } from '../entidade/cadastro';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";


@Component({

selector: 'cadastrosalvar-component',
templateUrl: 'cadastrosalvar.component.html',
providers:[AngularFireAuth],

})

export class CadastroComponent implements OnInit {
  cadastro : Cadastro = new Cadastro();


    constructor(private fire: AngularFireDatabase, private angularfireauth: AngularFireAuth, private rota: Router ) { }

    ngOnInit(/*cannobary*/) {
    }

  salvar(){
    this.fire.list('usuario').push(this.cadastro);
    this.cadastro = new Cadastro();
    this.angularfireauth.auth.createUserWithEmailAndPassword(this.cadastro.email, this.cadastro.senha).then(
    () => { this.rota.navigate(['cadastrolista']); }
    ).catch( (erro) => alert('erro') );

      }


}
