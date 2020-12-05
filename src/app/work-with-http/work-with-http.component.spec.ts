import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithHttpComponent } from './work-with-http.component';

describe('WorkWithHttpComponent', () => {
  let component: WorkWithHttpComponent;
  let fixture: ComponentFixture<WorkWithHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWithHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWithHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
