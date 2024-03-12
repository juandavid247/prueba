import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class GuiaTransporte extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public numero: string

  @column.dateTime()
  public fecha: DateTime

  @column()
  public cliente_id: number

  public static table = 'guia_transportes';

}

