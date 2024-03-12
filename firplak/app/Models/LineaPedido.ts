import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class LineaPedido extends BaseModel {
    @column({ isPrimary: true })
    public id: number
  
    @column()
    public pedido_id: number
  
    @column()
    public producto_id: number
  
    @column()
    public cantidad: number
  
    @column()
    public tipo: string

    public static table = 'linea_pedidos';

  }