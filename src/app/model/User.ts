
// criando classe (export class) User, que vai se comunicar com a classe Usuario. Esse User é o nome do arquivo ts que você criou dentro da model no Angular. Os atributos dentro dos colchetes devem ser exatamente iguais aos criados na model que você irá se relacionar no BackEnd. Neste caso a  model User do Angular vai se comunicar com a model Usuario do SpringBoot. crie coomo public e nõ private.

import { Postagem } from "./Postagem" //relacionamento entre Postagem e Usuario


//tudo que é numero no java: float, int, no Typescript vai ser number.
// para que não seja necessário inicializar os atributos, você vai precisar mudar as configurações em tsconfig.json
export class User{
  public id: number
  public nome: string
  public usuario: string
  public senha: string
  public foto: string
  public tipo: string
  public postagem: Postagem[]
}
