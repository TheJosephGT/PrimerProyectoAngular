import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionDetailIndividualComponent } from './direccion-detail-individual.component';

describe('DireccionDetailIndividualComponent', () => {
  let component: DireccionDetailIndividualComponent;
  let fixture: ComponentFixture<DireccionDetailIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionDetailIndividualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DireccionDetailIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
