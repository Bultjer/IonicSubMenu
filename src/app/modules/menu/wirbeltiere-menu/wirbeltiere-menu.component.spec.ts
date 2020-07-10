import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WirbeltiereMenuComponent } from './wirbeltiere-menu.component';

describe('WirbeltiereMenuComponent', () => {
  let component: WirbeltiereMenuComponent;
  let fixture: ComponentFixture<WirbeltiereMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WirbeltiereMenuComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WirbeltiereMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
