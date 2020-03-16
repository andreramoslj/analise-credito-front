import { async, TestBed } from '@angular/core/testing';
import { UpdateAnaliseCreditoComponent } from './update-analiseCredito.component';
describe('UpdateAnaliseCreditoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdateAnaliseCreditoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateAnaliseCreditoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=update-analiseCredito.component.spec.js.map