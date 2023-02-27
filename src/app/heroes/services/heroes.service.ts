import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl : string = environment.baseURL

  constructor(private http: HttpClient) { }

  // METODOS GET PARA TRAER INFORMACION DE LA BASE DE DATOS

  getHeroes () : Observable<Heroe[]> {

   return  this.http.get<Heroe []>(`${ this.baseUrl }/heroes`)

  }

  getHeroesPorId (id : string) : Observable<Heroe> {

    return  this.http.get<Heroe >(`${ this.baseUrl }/heroes/${ id } `)

   }

   getSugerencias (termino : string) : Observable<Heroe[]> {

    return  this.http.get<Heroe[] >(`${ this.baseUrl }/heroes?q=${termino}&_limit=6`)
   }

   //METODOS POST PARA INSERTAR EN LA BBDD

   //post agregar heroe

   agregarHeroe ( heroe : Heroe ) : Observable<Heroe> {

      return this.http.post<Heroe>(`${ this.baseUrl }/heroes`,heroe)

   }

}
