import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public fecha_creacion: DateTime

  @column.dateTime()
  public fecha_despacho: DateTime

  @column.dateTime()
  public fecha_entrega: DateTime

  @column()
  public cliente_id: number

  public static table = 'pedidos';

}