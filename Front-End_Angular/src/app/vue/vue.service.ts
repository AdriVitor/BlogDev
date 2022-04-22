import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IArtigos } from '../artigos.interface';

@Injectable({
  providedIn: 'root'
})
export class VueService {

  constructor(private http: HttpClient){}

    listarArtigoVue() : Observable<any> {
        return this.http.get<IArtigos>("https://localhost:7095/4").pipe(map(data => <IArtigos>data))
    }
}
