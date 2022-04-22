import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IArtigos } from '../artigos.interface';
import { VueService } from './vue.service';

@Component({
  selector: 'app-vue',
  templateUrl: './vue.html',
  styleUrls: ['./styles.css']
})
export class VueComponent implements OnInit {

  httpOptions : any = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
  }

  constructor(private vueService : VueService , private http : HttpClient) { }

  artigos: IArtigos[] = [];

  ngOnInit(): void {
    this.listarArtigoVue();
    // this.httpRequest();
  }
  
  listarArtigoVue(){
    this.vueService.listarArtigoVue().subscribe((data) => this.artigos = data)}

}
