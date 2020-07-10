import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home(menu:menu)',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./modules/menu/menu.module').then( m => m.MenuModule),
    outlet: 'menu'
  },
  {
    path: 'schmetterling',
    loadChildren: () =>
      import('./modules/schmetterling/schmetterling.module').then( m => m.SchmetterlingPageModule)
  },
  {
    path: 'molch',
    loadChildren: () =>
      import('./modules/molch/molch.module').then( m => m.MolchPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
