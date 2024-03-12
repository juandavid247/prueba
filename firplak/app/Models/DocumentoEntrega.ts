import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'


export default class DocumentoEntrega extends BaseModel {
    @column({ isPrimary: true })
    public id: number
  
    @column.dateTime()
    public fecha: DateTime
  
    @column()
    public pedido_id: number
  
    @column()
    public estado: string

    public static table = 'documento_entregas';

  }