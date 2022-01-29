import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from '../service/tema.service';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  postagem: Postagem = new Postagem()
  tema: Tema = new Tema()
  user: User = new User()
  listaPostagens: Postagem[]


  listaTemas: Tema[]
  idTema: number
  idUser = environment.id

  //injeção de dependência
  constructor(private router: Router, private postagemService: PostagemService, private temaService: TemaService, private authService: AuthService, private auth: AuthService) { }

  ngOnInit(){
   window.scroll(0,0)
   if(environment.token == ''){
   alert('Sua sessão expirou ! Faça login novamente')
   this.router.navigate(['/entrar'])

  }
  this.auth.refreshToken();
  this.getAllTemas();
  this.getAllPostagens();
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=> {
    this.getAllTemas()
    this.listaTemas = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User)=>{
    this.user = resp
    })

  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=> {
    this.tema = resp

    })
  }

getAllPostagens(){

  this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=> {
  this.listaPostagens = resp

  } )
}

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagens(this.postagem).subscribe((resp: Postagem) => {
    this.postagem = resp
    alert('Postagem criada com sucesso !')
    this.postagem = new Postagem
    this.getAllPostagens()
    })





  }


}
