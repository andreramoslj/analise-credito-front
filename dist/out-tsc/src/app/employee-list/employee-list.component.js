import * as tslib_1 from "tslib";
import { AnaliseCreditoService } from "./../analiseCredito.service";
import { Component } from "@angular/core";
import { Router } from '@angular/router';
let AnaliseCreditoListComponent = class AnaliseCreditoListComponent {
    constructor(analiseCreditoService, router) {
        this.analiseCreditoService = analiseCreditoService;
        this.router = router;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.analiseCreditos = this.analiseCreditoService.getAnaliseCreditosList();
    }
    deleteAnaliseCredito(id) {
        this.analiseCreditoService.deleteAnaliseCredito(id)
            .subscribe(data => {
            console.log(data);
            this.reloadData();
        }, error => console.log(error));
    }
    analiseCreditoDetails(id) {
        this.router.navigate(['details', id]);
    }
    updateAnaliseCredito(id) {
        this.router.navigate(['update', id]);
    }
};
AnaliseCreditoListComponent = tslib_1.__decorate([
    Component({
        selector: "app-analiseCredito-list",
        templateUrl: "./analiseCredito-list.component.html",
        styleUrls: ["./analiseCredito-list.component.css"]
    }),
    tslib_1.__metadata("design:paramtypes", [AnaliseCreditoService,
        Router])
], AnaliseCreditoListComponent);
export { AnaliseCreditoListComponent };
//# sourceMappingURL=analiseCredito-list.component.js.map