import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularService } from './angular.service';
import { IArtigos } from '../artigos.interface';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.html',
  styleUrls: ['./styles.css']
})
export class AngularComponent implements OnInit {

  httpOptions : any = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
  }

  constructor(private angularService : AngularService , private http : HttpClient) { }

  artigos: IArtigos[] = [];

  ngOnInit(): void {
    this.listarArtigoAngular();
    // this.httpRequest();
  }
  
  listarArtigoAngular(){
    this.angularService.listarArtigoAngular().subscribe((data) => this.artigos = data)}

}
