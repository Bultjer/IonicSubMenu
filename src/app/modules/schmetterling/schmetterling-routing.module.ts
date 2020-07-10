import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchmetterlingPage } from './schmetterling.page';

const routes: Routes = [
  {
    path: '',
    component: SchmetterlingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchmetterlingPageRoutingModule {}
