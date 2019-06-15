import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dados',
    pathMatch: 'full'
  },

  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'dados', loadChildren: './dados/dados.module#DadosPageModule' },
  { path: 'calculo', loadChildren: './calculo/calculo.module#CalculoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
