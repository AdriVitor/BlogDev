import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IArtigos } from '../artigos.interface';
import {ReactService} from './react.service';

@Component({
  selector: 'app-react',
  templateUrl: './react.html',
  styleUrls: ['./styles.css']
})
export class ReactComponent implements OnInit {

  httpOptions : any = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
  }

  constructor(private reactService : ReactService , private http : HttpClient) { }

  artigos: IArtigos[] = [];

  ngOnInit(): void {
    this.listarArtigoReact();
    // this.httpRequest();
  }
  
  listarArtigoReact(){
    this.reactService.listarArtigoReact().subscribe((data) => this.artigos = data)}


}
