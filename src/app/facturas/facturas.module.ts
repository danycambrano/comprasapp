import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturasComponent } from './facturas/facturas.component';
import { Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {path: '', component: FacturasComponent}
];

@NgModule({
  declarations: [FacturasComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpModule
  ],
})
export class FacturasModule { }
