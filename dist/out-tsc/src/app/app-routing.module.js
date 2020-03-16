import * as tslib_1 from "tslib";
import { AnaliseCreditoDetailsComponent } from './analiseCredito-details/analiseCredito-details.component';
import { CreateAnaliseCreditoComponent } from './create-analiseCredito/create-analiseCredito.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnaliseCreditoListComponent } from './analiseCredito-list/analiseCredito-list.component';
import { UpdateAnaliseCreditoComponent } from './update-analiseCredito/update-analiseCredito.component';
const routes = [
    { path: '', redirectTo: 'analiseCredito', pathMatch: 'full' },
    { path: 'analiseCreditos', component: AnaliseCreditoListComponent },
    { path: 'add', component: CreateAnaliseCreditoComponent },
    { path: 'update/:id', component: UpdateAnaliseCreditoComponent },
    { path: 'details/:id', component: AnaliseCreditoDetailsComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map