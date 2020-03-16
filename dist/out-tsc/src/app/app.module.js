import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAnaliseCreditoComponent } from './create-analiseCredito/create-analiseCredito.component';
import { AnaliseCreditoDetailsComponent } from './analiseCredito-details/analiseCredito-details.component';
import { AnaliseCreditoListComponent } from './analiseCredito-list/analiseCredito-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAnaliseCreditoComponent } from './update-analiseCredito/update-analiseCredito.component';
import { TextMaskModule } from 'angular2-text-mask';
import { StrictNumberOnlyDirective } from 'src/utils/StrictNumberOnlyDirective';
import { CurrencyMaskModule } from 'ng2-currency-mask';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            CreateAnaliseCreditoComponent,
            AnaliseCreditoDetailsComponent,
            AnaliseCreditoListComponent,
            StrictNumberOnlyDirective,
            UpdateAnaliseCreditoComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            HttpClientModule,
            TextMaskModule,
            CurrencyMaskModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map