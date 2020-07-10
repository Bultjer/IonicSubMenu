import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WirbelloseTiereMenuComponent } from './wirbellose-tiere-menu.component';

describe('WirbelloseTiereMenuComponent', () => {
  let component: WirbelloseTiereMenuComponent;
  let fixture: ComponentFixture<WirbelloseTiereMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WirbelloseTiereMenuComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WirbelloseTiereMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
