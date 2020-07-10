import { NgModule } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { WirbeltiereMenuComponent } from './wirbeltiere-menu/wirbeltiere-menu.component';
import { WirbelloseTiereMenuComponent } from './wirbellose-tiere-menu/wirbellose-tiere-menu.component';
import { ReptilienMenuComponent } from './reptilien-menu/reptilien-menu.component';
import { InsektenMenuComponent } from './insekten-menu/insekten-menu.component';
import { IonicModule } from '@ionic/angular';
import { MenuRoutes } from './menu-routing.module'

@NgModule({
  declarations: [
    MainMenuComponent,
    WirbeltiereMenuComponent,
    WirbelloseTiereMenuComponent,
    ReptilienMenuComponent,
    InsektenMenuComponent
  ],
  imports: [
    IonicModule,
    MenuRoutes
  ]
})

export class MenuModule {}