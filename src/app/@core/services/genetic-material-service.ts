import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneticMaterial } from '../models/GeneticMaterial';

@Injectable({
  providedIn: 'root',
})
export class GeneticMaterialService {

  urlApi = 'http://localhost:8080/api/genetic-material';

  constructor(private http: HttpClient){}

  getAll(): Observable<GeneticMaterial[]>{
    return this.http.get<GeneticMaterial[]>(this.urlApi);
  }

  create(body: GeneticMaterial): Observable<number>{
    return this.http.post<number>(this.urlApi + "/create", body);
  }

  edit(body: GeneticMaterial): Observable<number>{
    return this.http.put<number>(this.urlApi + "/update/" + body.id, body);
  }

  delete(id: number): Observable<any>{
    return this.http.delete<any>(`${this.urlApi}/delete/${id}`);
  }
}
