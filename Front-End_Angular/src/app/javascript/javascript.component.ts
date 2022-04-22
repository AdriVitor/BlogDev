import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IArtigos } from '../artigos.interface';
import {JavascriptService} from './javascript.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.html',
  styleUrls: ['./styles.css']
})
export class JavascriptComponent implements OnInit {

  httpOptions : any = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
  }

  constructor(private javascriptService : JavascriptService , private http : HttpClient) { }

  artigos: IArtigos[] = [];

  ngOnInit(): void {
    this.listarArtigoJs();
    // this.httpRequest();
  }
  
  listarArtigoJs(){
    this.javascriptService.listarArtigoJs().subscribe((data) => this.artigos = data)}

  // public httpRequest(){
  //   this.http.get('http://localhost:5009/1',this.httpOptions).subscribe(data => {
  //     return data;
  //   });
  // }
//   _Url = 'http://localhost:5009/1';

//   getJS(): Observable<IJavascript> {
//     return this.http.get(this._Url).pipe(map((response: Response) => <IJavascript>response.json()))
//       .do(data => console.log('All: ' + JSON.stringify(data)))
//       .catch(console.log("ERRO"));
// }
}
