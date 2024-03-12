import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class PruebaEntrega extends BaseModel {
    @column({ isPrimary: true })
    public id: number
  
    @column()
    public guia_transporte_id: number
  
    @column()
    public documento_entrega_id: number
  
    @column()
    public firma_cliente: Buffer
  
    @column()
    public observacion: string

    public static table = 'prueba_entregas';

  }