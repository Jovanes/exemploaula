import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from './usuario/usuario';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

usuario: Usuario = new Usuario();

  constructor(private afAuth: AngularFireAuth, private rota: Router) {}


direcionar(){
this.rota.navigate(['cadastro']);
  }

  logar(){
  this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
  () => { this.rota.navigate(['pagina']); }
  ).catch( (erro) => console.log(erro) );
  }

  logout() {
  this.afAuth.auth.signOut();
  this.rota.navigate(['/']);
  }
}
