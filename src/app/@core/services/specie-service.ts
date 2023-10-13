import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specie } from '../models/Specie.model';

@Injectable({
  providedIn: 'root',
})
export class SpecieService {

  specieUrlApi = 'http://localhost:8080/api/specie';

  constructor(private http: HttpClient){}

  getSpecies(): Observable<Specie[]>{
    return this.http.get<Specie[]>(this.specieUrlApi);
  }

  create(body: Specie): Observable<number>{
    return this.http.post<number>(this.specieUrlApi + "/create", body);
  }

  edit(body: Specie): Observable<number>{
    return this.http.put<number>(this.specieUrlApi + "/update/" + body.id, body);
  }

  delete(id: number): Observable<any>{
    return this.http.delete<any>(`${this.specieUrlApi}/delete/${id}`);
  }
}
