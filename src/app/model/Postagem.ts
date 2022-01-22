import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{

public id: number
public titulo: string
public texto: string
public data: Date
public usuario: User   // relacionado essa tabela com User, importando-a como um objeto.
public tema: Tema
}
