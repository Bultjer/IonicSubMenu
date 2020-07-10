import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MolchPage } from './molch.page';

describe('MolchPage', () => {
  let component: MolchPage;
  let fixture: ComponentFixture<MolchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MolchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
