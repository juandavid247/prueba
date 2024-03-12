import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Producto extends BaseModel {
    @column({ isPrimary: true })
    public id: number
  
    @column()
    public nombre: string
  
    @column()
    public sku: string

    public static table = 'productos';

  }