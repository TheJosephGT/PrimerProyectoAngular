import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDireccionDetailComponent } from './clientes-direccion-detail.component';

describe('ClientesDireccionDetailComponent', () => {
  let component: ClientesDireccionDetailComponent;
  let fixture: ComponentFixture<ClientesDireccionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesDireccionDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientesDireccionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
