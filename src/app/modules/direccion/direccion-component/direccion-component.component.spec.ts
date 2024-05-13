import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionComponentComponent } from './direccion-component.component';

describe('DireccionComponentComponent', () => {
  let component: DireccionComponentComponent;
  let fixture: ComponentFixture<DireccionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DireccionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
