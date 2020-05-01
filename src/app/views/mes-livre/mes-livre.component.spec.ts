import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesLivreComponent } from './mes-livre.component';

describe('MesLivreComponent', () => {
  let component: MesLivreComponent;
  let fixture: ComponentFixture<MesLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
