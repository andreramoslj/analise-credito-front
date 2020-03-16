import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnaliseCreditoComponent } from './create-analiseCredito.component';

describe('CreateAnaliseCreditoComponent', () => {
  let component: CreateAnaliseCreditoComponent;
  let fixture: ComponentFixture<CreateAnaliseCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAnaliseCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnaliseCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
