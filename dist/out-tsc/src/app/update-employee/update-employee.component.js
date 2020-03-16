import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AnaliseCredito } from '../analiseCredito';
import { ActivatedRoute, Router } from '@angular/router';
import { AnaliseCreditoService } from '../analiseCredito.service';
let UpdateAnaliseCreditoComponent = class UpdateAnaliseCreditoComponent {
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
    updateAnaliseCredito() {
        this.analiseCreditoService.updateAnaliseCredito(this.id, this.analiseCredito)
            .subscribe(data => console.log(data), error => console.log(error));
        this.analiseCredito = new AnaliseCredito();
        this.gotoList();
    }
    onSubmit() {
        this.updateAnaliseCredito();
    }
    gotoList() {
        this.router.navigate(['/analiseCreditos']);
    }
};
UpdateAnaliseCreditoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-update-analiseCredito',
        templateUrl: './update-analiseCredito.component.html',
        styleUrls: ['./update-analiseCredito.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router,
        AnaliseCreditoService])
], UpdateAnaliseCreditoComponent);
export { UpdateAnaliseCreditoComponent };
//# sourceMappingURL=update-analiseCredito.component.js.map