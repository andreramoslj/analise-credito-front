import { AnaliseCredito } from '../analiseCredito';
import { Component, OnInit, Input } from '@angular/core';
import { AnaliseCreditoService } from '../analiseCredito.service';
import { AnaliseCreditoListComponent } from '../analiseCredito-list/analiseCredito-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-analiseCredito-details',
  templateUrl: './analiseCredito-details.component.html',
  styleUrls: ['./analiseCredito-details.component.css']
})
export class AnaliseCreditoDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['analiseCreditos']);
  }
}
