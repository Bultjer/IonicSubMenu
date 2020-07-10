import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MolchPageRoutingModule } from './molch-routing.module';

import { MolchPage } from './molch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MolchPageRoutingModule
  ],
  declarations: [MolchPage]
})
export class MolchPageModule {}
