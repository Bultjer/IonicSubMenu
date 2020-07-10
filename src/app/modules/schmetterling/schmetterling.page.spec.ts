import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchmetterlingPage } from './schmetterling.page';

describe('SchmetterlingPage', () => {
  let component: SchmetterlingPage;
  let fixture: ComponentFixture<SchmetterlingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmetterlingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchmetterlingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
