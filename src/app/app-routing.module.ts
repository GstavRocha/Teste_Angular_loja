import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import{ListaProdutosComponent} from "./lista-produtos/lista-produtos.component";
import{CarrinhoProdutosComponent} from "./carrinho-produtos/carrinho-produtos.component";
import{DetalhesProdutosComponent} from "./detalhes-produtos/detalhes-produtos.component";
import {LadingComponent} from "./lading/lading.component";

const routes: Routes =[
  {path:'', component: LadingComponent},
  {path: 'ListasProdutos', component: ListaProdutosComponent},
  {path:'DetalhesProdutos', component: DetalhesProdutosComponent},
  {path:'CarrinhoProdutos', component: CarrinhoProdutosComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
