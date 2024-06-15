import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KantoPageRoutingModule } from './kanto-routing.module';

import { KantoPage } from './kanto.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KantoPageRoutingModule,
    RouterModule
  ],
  declarations: [KantoPage]
})
export class KantoPageModule {}
