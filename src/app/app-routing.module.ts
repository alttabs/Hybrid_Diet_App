import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'dados', loadChildren: './data/dados/dados.module#DadosPageModule' },
  { path: 'calculo', loadChildren: './calculo/calculo.module#CalculoPageModule' }

  // { path: 'formulario', loadChildren: './clientes/formulario.module#FormularioPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
