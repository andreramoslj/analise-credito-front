import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseCreditoDetailsComponent } from './analiseCredito-details.component';

describe('AnaliseCreditoDetailsComponent', () => {
  let component: AnaliseCreditoDetailsComponent;
  let fixture: ComponentFixture<AnaliseCreditoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliseCreditoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseCreditoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
