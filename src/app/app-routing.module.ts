import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {CadastroComponent} from  './componentes/cadastroo/cadastrosalvar/cadastrosalvar.component';
import {HistoriaComponent} from  './componentes/historia/historia.component';
import {OpçoesComponent} from  './componentes/opçoes/opçoes.component';
import {QuizComponent} from  './componentes/quiz/quiz.component';
import {HomemdeferroComponent} from  './componentes/homemdeferro/homemdeferro.component';
import {CadastrolistaComponent} from  './componentes/cadastroo/cadastrolista/cadastrolista.component';
import {FilmeSalvarComponent} from './filme/filme-salvar/filme-salvar.component';
import {FilmeListarComponent} from './filme/filme-listar/filme-listar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {path: 'cadastrosalvar', component: CadastroComponent},
  {path: 'historia', component: HistoriaComponent},
  {path: 'opçoes', component: OpçoesComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'homemdeferro', component: HomemdeferroComponent},
  {path: 'cadastrolista', component: CadastrolistaComponent},
  {path: 'filme-salvar', component: FilmeSalvarComponent},
  {path: 'filme-listar', component: FilmeListarComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
