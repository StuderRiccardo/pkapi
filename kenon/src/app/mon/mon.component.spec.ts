import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComponent } from './mon.component';

describe('MonComponent', () => {
  let component: MonComponent;
  let fixture: ComponentFixture<MonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonComponent]
    });
    fixture = TestBed.createComponent(MonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
