import { async, TestBed } from '@angular/core/testing';
import { AnaliseCreditoDetailsComponent } from './analiseCredito-details.component';
describe('AnaliseCreditoDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AnaliseCreditoDetailsComponent]
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
//# sourceMappingURL=analiseCredito-details.component.spec.js.map