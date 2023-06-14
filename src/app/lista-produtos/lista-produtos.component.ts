import {Component, OnInit} from '@angular/core';
import {ProtudosService} from "../service/protudos.service";
import {ModeloProdutos} from "../service/model/modeloProdutos";

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
  export class ListaProdutosComponent{
  listaProdutos: ModeloProdutos[]
  constructor(private ps: ProtudosService) {
    this.listaProdutos = [];
    this.getProdutos()
  }
  getProdutos(){
    this.ps.getJson().subscribe((res:ModeloProdutos) =>{
       return this.listaProdutos = Object.values(res)[0];
    })
  }
}
