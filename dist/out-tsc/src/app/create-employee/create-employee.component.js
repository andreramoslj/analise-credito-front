import * as tslib_1 from "tslib";
import { AnaliseCreditoService } from '../analiseCredito.service';
import { AnaliseCredito } from '../analiseCredito';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let CreateAnaliseCreditoComponent = class CreateAnaliseCreditoComponent {
    constructor(analiseCreditoService, router) {
        this.analiseCreditoService = analiseCreditoService;
        this.router = router;
        this.mascaraCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.analiseCredito = new AnaliseCredito();
        this.submitted = false;
    }
    ngOnInit() {
    }
    newAnaliseCredito() {
        this.submitted = false;
        this.analiseCredito = new AnaliseCredito();
    }
    save() {
        this.analiseCreditoService.createAnaliseCredito(this.analiseCredito)
            .subscribe(data => console.log(data), error => console.log(error));
        this.analiseCredito = new AnaliseCredito();
        this.gotoList();
    }
    onSubmit() {
        this.submitted = true;
        this.save();
    }
    gotoList() {
        this.router.navigate(['/analiseCreditos']);
    }
};
CreateAnaliseCreditoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-create-analiseCredito',
        templateUrl: './create-analiseCredito.component.html',
        styleUrls: ['./create-analiseCredito.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [AnaliseCreditoService,
        Router])
], CreateAnaliseCreditoComponent);
export { CreateAnaliseCreditoComponent };
//# sourceMappingURL=create-analiseCredito.component.js.map