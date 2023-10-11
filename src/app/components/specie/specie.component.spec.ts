import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieComponent } from './specie.component';

describe('SpecieComponent', () => {
  let component: SpecieComponent;
  let fixture: ComponentFixture<SpecieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecieComponent]
    });
    fixture = TestBed.createComponent(SpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
