import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestablecerComponent } from './restablecer.component';

describe('RestablecerComponent', () => {
  let component: RestablecerComponent;
  let fixture: ComponentFixture<RestablecerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestablecerComponent]
    });
    fixture = TestBed.createComponent(RestablecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
