import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  //HttpClient --> disponibiliza os métodos HTTP
  constructor(private http: HttpClient) { }

  token = {
headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blogpessoalrodrigocesar.herokuapp.com/temas', this.token)
  }
  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://blogpessoalrodrigocesar.herokuapp.com/temas/${id}`, this.token)
  }
  //registra o objeto tema do tipo Tema, no meu endpoint e retorna aguarda a resposta de um único Tema.
  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://blogpessoalrodrigocesar.herokuapp.com/temas', tema, this.token,)
  }
  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://blogpessoalrodrigocesar.herokuapp.com/temas', tema, this.token,)
  }
  deleteTema(id: number){
    return this.http.delete(`https://blogpessoalrodrigocesar.herokuapp.com/temas/${id}`, this.token)

  }


}
