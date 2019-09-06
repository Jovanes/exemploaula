import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CadastroComponent} from  './componentes/cadastroo/cadastrosalvar/cadastrosalvar.component';
import {HistoriaComponent} from  './componentes/historia/historia.component';
import {OpçoesComponent} from  './componentes/opçoes/opçoes.component';
import {QuizComponent} from  './componentes/quiz/quiz.component';
import {FormsModule} from '@angular/forms';
import {CadastrolistaComponent} from  './componentes/cadastroo/cadastrolista/cadastrolista.component';
import {FilmeSalvarComponent} from './filme/filme-salvar/filme-salvar.component';
import {FilmeListarComponent} from './filme/filme-listar/filme-listar.component';




import {HomemdeferroComponent} from  './componentes/homemdeferro/homemdeferro.component';


@NgModule({
  declarations: [AppComponent,CadastroComponent,HistoriaComponent,OpçoesComponent,QuizComponent,HomemdeferroComponent,CadastrolistaComponent,FilmeSalvarComponent, FilmeListarComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireDatabaseModule,
AngularFireModule.initializeApp({
  apiKey: "AIzaSyDDNgCXsyQ3l2Z7LVYho2K2JCjdItNF1OQ",
      authDomain: "appmarvelrec.firebaseapp.com",
      databaseURL: "https://appmarvelrec.firebaseio.com",
      projectId: "appmarvelrec",
      storageBucket: "appmarvelrec.appspot.com",
      messagingSenderId: "208713855389",
      appId: "1:208713855389:web:6cb8702004627b18"
})

],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
