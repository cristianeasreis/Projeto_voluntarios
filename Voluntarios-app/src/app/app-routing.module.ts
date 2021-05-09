import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioAtualizarComponent } from './components/usuario-atualizar/usuario-atualizar.component';
import { LoginComponent } from './components/usuario-login/login.component';
import { RegistroComponent } from './components/usuario-registro/registro.component';
import { EnderecoAtualizarComponent } from './components/endereco-atualizar/endereco-atualizar.component';

const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: 'usuario/login', component: LoginComponent },
  { path: 'usuario/registro/:tipo', component: RegistroComponent },
  { path: 'usuario/endereco/:id', component:EnderecoComponent},
  
  
  { path :'endereco/atualizar', component: EnderecoAtualizarComponent, canActivate: [AuthGuard]},  
  { path: 'usuario/atualizar', component: UsuarioAtualizarComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
