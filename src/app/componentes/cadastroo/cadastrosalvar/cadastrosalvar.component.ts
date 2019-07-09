import { Component, OnInit} from '@angular/core';
import { Cadastro } from '../entidade/cadastro';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';


@Component({


selector: 'cadastrosalvar-component',
templateUrl: 'cadastrosalvar.component.html',


})

export class CadastroComponent implements OnInit {

  cadastro : Cadastro = new Cadastro();


    constructor(private fire: AngularFireDatabase,
      private rota: Router
    ) { }

    ngOnInit(/*cannobary*/) {
    }



  salvar(){
    this.fire.list('usuario').push(this.cadastro);
    this.cadastro = new Cadastro();
    alert("Cadastro feito com sucesso.");
    this.rota.navigate(['cadastrolista']);

      }


}
