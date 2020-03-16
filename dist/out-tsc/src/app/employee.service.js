import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let AnaliseCreditoService = class AnaliseCreditoService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/v1/analise-credito';
    }
    getAnaliseCredito(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    createAnaliseCredito(analiseCredito) {
        return this.http.post(`${this.baseUrl}`, analiseCredito);
    }
    updateAnaliseCredito(id, value) {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }
    deleteAnaliseCredito(id) {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
    getAnaliseCreditosList() {
        return this.http.get(`${this.baseUrl}`);
    }
};
AnaliseCreditoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], AnaliseCreditoService);
export { AnaliseCreditoService };
//# sourceMappingURL=analiseCredito.service.js.map