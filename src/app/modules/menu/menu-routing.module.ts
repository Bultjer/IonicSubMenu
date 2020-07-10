import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { WirbeltiereMenuComponent } from './wirbeltiere-menu/wirbeltiere-menu.component';
import { WirbelloseTiereMenuComponent } from './wirbellose-tiere-menu/wirbellose-tiere-menu.component';
import { ReptilienMenuComponent } from './reptilien-menu/reptilien-menu.component';
import { InsektenMenuComponent } from './insekten-menu/insekten-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
  },
  {
    path: 'wirbeltiere',
    component: WirbeltiereMenuComponent
  },
  {
    path: 'wirbellose-tiere',
    component: WirbelloseTiereMenuComponent
  },
  {
    path: 'reptilien',
    component: ReptilienMenuComponent
  },
  {
    path: 'insekten',
    component: InsektenMenuComponent
  }
];

export const MenuRoutes = RouterModule.forChild(routes);