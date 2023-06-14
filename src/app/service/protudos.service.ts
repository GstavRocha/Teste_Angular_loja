import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ModeloProdutos} from "./model/modeloProdutos";
@Injectable({
  providedIn: 'root'
})
export class ProtudosService {
  public produtos:{nome: string, preco: string, img: string}[]=[]
  constructor(private http: HttpClient) {
    this.produtos = []
  }
  getJson():Observable<ModeloProdutos>{
    return  this.http.get<ModeloProdutos>('assets/produtos.json')
  }
  allProdutos(){
    return this.produtos;
  }
}
