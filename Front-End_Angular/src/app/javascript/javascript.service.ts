import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { IArtigos } from "../artigos.interface";

@Injectable({
    providedIn: 'root'
})

export class JavascriptService {
    constructor(private http: HttpClient){}

    listarArtigoJs() : Observable<any> {
        return this.http.get<IArtigos>("https://localhost:7095/1").pipe(map(data => <IArtigos>data))
    }
}