import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseCreditoListComponent } from './analiseCredito-list.component';

describe('AnaliseCreditoListComponent', () => {
  let component: AnaliseCreditoListComponent;
  let fixture: ComponentFixture<AnaliseCreditoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliseCreditoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseCreditoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
