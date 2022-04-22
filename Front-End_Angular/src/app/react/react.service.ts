import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { IArtigos } from "../artigos.interface";


@Injectable({
    providedIn: 'root'
})

export class ReactService {
    constructor(private http: HttpClient){}

    listarArtigoReact() : Observable<any> {
        return this.http.get<IArtigos>("https://localhost:7095/2").pipe(map(data => <IArtigos>data))
    }
}
