import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpecieComponent } from './create-specie.component';

describe('CreateSpecieComponent', () => {
  let component: CreateSpecieComponent;
  let fixture: ComponentFixture<CreateSpecieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSpecieComponent]
    });
    fixture = TestBed.createComponent(CreateSpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
