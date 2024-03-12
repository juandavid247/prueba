import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id_usuario: number

  @column()
  public nombre_usuario: string

  @column()
  public correo_electronico: string

  @column()
  public password: string

  @column()
  public rol: string

  @column()
  public estado: boolean
}
