import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Factura extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public numero: string

  @column.dateTime()
  public fecha: DateTime

  @column()
  public cliente_id: number

  @column()
  public total: number

  public static table = 'facturas';

}