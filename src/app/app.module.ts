import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { DetalhesProdutosComponent } from './detalhes-produtos/detalhes-produtos.component';
import { CarrinhoProdutosComponent } from './carrinho-produtos/carrinho-produtos.component';
import {AppRoutingModule} from "./app-routing.module";
import {ProtudosService} from "./service/protudos.service";
import { LadingComponent } from './lading/lading.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    DetalhesProdutosComponent,
    CarrinhoProdutosComponent,
    LadingComponent
  ],
  providers: [ProtudosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
