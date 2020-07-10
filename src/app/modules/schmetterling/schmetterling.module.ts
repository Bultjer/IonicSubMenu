import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchmetterlingPageRoutingModule } from './schmetterling-routing.module';

import { SchmetterlingPage } from './schmetterling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchmetterlingPageRoutingModule
  ],
  declarations: [SchmetterlingPage]
})
export class SchmetterlingPageModule {}
