import { AnaliseCreditoDetailsComponent } from '../analiseCredito-details/analiseCredito-details.component';
import { Observable } from "rxjs";
import { AnaliseCreditoService } from "./../analiseCredito.service";
import { AnaliseCredito } from "./../analiseCredito";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-analiseCredito-list",
  templateUrl: "./analiseCredito-list.component.html",
  styleUrls: ["./analiseCredito-list.component.css"]
})
export class AnaliseCreditoListComponent implements OnInit {
  analiseCreditos: Observable<AnaliseCredito[]>;

  constructor(private analiseCreditoService: AnaliseCreditoService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.analiseCreditos = this.analiseCreditoService.getAnaliseCreditosList();
  }

  deleteAnaliseCredito(id: number) {
    this.analiseCreditoService.deleteAnaliseCredito(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  analiseCreditoDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateAnaliseCredito(id: number){
    this.router.navigate(['update', id]);
  }
}
