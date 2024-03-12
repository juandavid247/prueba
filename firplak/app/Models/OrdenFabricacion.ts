import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class OrdenFabricacion extends BaseModel {
    @column({ isPrimary: true })
    public id: number
  
    @column()
    public linea_pedido_id: number
  
    @column.dateTime()
    public fecha_creacion: DateTime
  
    @column()
    public estado: string

    public static table = 'orden_fabricacions';
  }