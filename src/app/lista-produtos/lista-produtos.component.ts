import {Component, OnInit} from '@angular/core';
import {ProtudosService} from "../service/protudos.service";
import {ModeloProdutos} from "../service/model/modeloProdutos";

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
  export class ListaProdutosComponent implements OnInit{
  listaProdutos: ModeloProdutos[]
  constructor(private ps: ProtudosService) {
    this.listaProdutos = [];
  }
ngOnInit() {
  this.ps.getJson().subscribe((res:ModeloProdutos) =>{
    this.listaProdutos = Object.values(res);
  })
}
}
