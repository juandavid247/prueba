import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Bodega extends BaseModel {
    @column({ isPrimary: true })
    public id: number
  
    @column()
    public nombre: string
  
    @column()
    public tipo: string

    public static table = 'bodegas';

  }
  