import { AnaliseCreditoService } from '../analiseCredito.service';
import { AnaliseCredito } from '../analiseCredito';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-analiseCredito',
  templateUrl: './create-analiseCredito.component.html',
  styleUrls: ['./create-analiseCredito.component.css']
})
export class CreateAnaliseCreditoComponent implements OnInit {

  mascaraCpf = [/\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  analiseCredito: AnaliseCredito = new AnaliseCredito();
  submitted = false;

  constructor(private analiseCreditoService: AnaliseCreditoService,
    private router: Router) { }

  ngOnInit() {
  }

  newAnaliseCredito(): void {
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
}
