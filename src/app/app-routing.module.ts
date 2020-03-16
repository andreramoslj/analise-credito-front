import { AnaliseCreditoDetailsComponent } from './analiseCredito-details/analiseCredito-details.component';
import { CreateAnaliseCreditoComponent } from './create-analiseCredito/create-analiseCredito.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnaliseCreditoListComponent } from './analiseCredito-list/analiseCredito-list.component';
import { UpdateAnaliseCreditoComponent } from './update-analiseCredito/update-analiseCredito.component';

const routes: Routes = [
  { path: '', redirectTo: 'analiseCredito', pathMatch: 'full' },
  { path: 'analiseCreditos', component: AnaliseCreditoListComponent },
  { path: 'add', component: CreateAnaliseCreditoComponent },
  { path: 'update/:id', component: UpdateAnaliseCreditoComponent },
  { path: 'details/:id', component: AnaliseCreditoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
