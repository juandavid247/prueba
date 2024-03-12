import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public ID_cliente: number

  @column()
  public Nombre_Cliente: string

  @column()
  public Direccion: string

  public static table = 'clientes';

}
