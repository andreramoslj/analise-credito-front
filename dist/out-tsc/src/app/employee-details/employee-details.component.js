import * as tslib_1 from "tslib";
import { AnaliseCredito } from '../analiseCredito';
import { Component } from '@angular/core';
import { AnaliseCreditoService } from '../analiseCredito.service';
import { Router, ActivatedRoute } from '@angular/router';
let AnaliseCreditoDetailsComponent = class AnaliseCreditoDetailsComponent {
    constructor(route, router, analiseCreditoService) {
        this.route = route;
        this.router = router;
        this.analiseCreditoService = analiseCreditoService;
    }
    ngOnInit() {
        this.analiseCredito = new AnaliseCredito();
        this.id = this.route.snapshot.params['id'];
        this.analiseCreditoService.getAnaliseCredito(this.id)
            .subscribe(data => {
            console.log(data);
            this.analiseCredito = data;
        }, error => console.log(error));
    }
    list() {
        this.router.navigate(['analiseCreditos']);
    }
};
AnaliseCreditoDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-analiseCredito-details',
        templateUrl: './analiseCredito-details.component.html',
        styleUrls: ['./analiseCredito-details.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router,
        AnaliseCreditoService])
], AnaliseCreditoDetailsComponent);
export { AnaliseCreditoDetailsComponent };
//# sourceMappingURL=analiseCredito-details.component.js.map