import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule  } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }


