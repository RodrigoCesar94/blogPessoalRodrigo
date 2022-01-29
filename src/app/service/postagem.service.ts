import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
      }

getAllPostagens(): Observable<Postagem[]>{
return this.http.get<Postagem[]>('https://blogpessoalrodrigocesar.herokuapp.com/postagens', this.token)
}
getByIdPostagens(id: number): Observable<Postagem>{
  return this.http.get<Postagem>(`https://blogpessoalrodrigocesar.herokuapp.com/postagens/${id}`, this.token)
}

postPostagens(postagem: Postagem): Observable<Postagem>{
  return this.http.post<Postagem>('https://blogpessoalrodrigocesar.herokuapp.com/postagens', postagem, this.token,)
}
putPostagens(postagem: Postagem): Observable<Postagem>{
  return this.http.put<Postagem>('https://blogpessoalrodrigocesar.herokuapp.com/postagens', postagem, this.token,)
}
deletePostagens(id: number){
  return this.http.delete(`https://blogpessoalrodrigocesar.herokuapp.com/postagens/${id}`, this.token)

}

}
