import { Component, OnInit } from '@angular/core';
import { AnaliseCredito } from '../analiseCredito';
import { ActivatedRoute, Router } from '@angular/router';
import { AnaliseCreditoService } from '../analiseCredito.service';

@Component({
  selector: 'app-update-analiseCredito',
  templateUrl: './update-analiseCredito.component.html',
  styleUrls: ['./update-analiseCredito.component.css']
})
export class UpdateAnaliseCreditoComponent implements OnInit {

  id: number;
  analiseCredito: AnaliseCredito;

  constructor(private route: ActivatedRoute,private router: Router,
    private analiseCreditoService: AnaliseCreditoService) { }

  ngOnInit() {
    this.analiseCredito = new AnaliseCredito();

    this.id = this.route.snapshot.params['id'];
    
    this.analiseCreditoService.getAnaliseCredito(this.id)
      .subscribe(data => {
        console.log(data)
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
}
