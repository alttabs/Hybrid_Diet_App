import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DadosPage } from './dados.page';
import { FormularioComponent } from '../../clientes/formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    component: DadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DadosPage]
})
export class DadosPageModule {}
