import { async, TestBed } from '@angular/core/testing';
import { CreateAnaliseCreditoComponent } from './create-analiseCredito.component';
describe('CreateAnaliseCreditoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateAnaliseCreditoComponent]
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
//# sourceMappingURL=create-analiseCredito.component.spec.js.map