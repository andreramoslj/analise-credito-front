import { async, TestBed } from '@angular/core/testing';
import { AnaliseCreditoListComponent } from './analiseCredito-list.component';
describe('AnaliseCreditoListComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AnaliseCreditoListComponent]
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
//# sourceMappingURL=analiseCredito-list.component.spec.js.map