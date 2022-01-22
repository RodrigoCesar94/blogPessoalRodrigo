import { Postagem } from "./Postagem"

export class Tema{

  public id: number
  public descrição: string
  public postagem: Postagem[] // como aqui nós retornamos um array de postagens, é necessário colocar o //símbolo de array []

}
