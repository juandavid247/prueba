import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'

export default class ClientesController {
  public async index({ response }: HttpContextContract) {
    const clientes = await Cliente.all()
    return response.json(clientes)
  }

  public async create({}: HttpContextContract) {
    // Implementación si es necesario
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['ID_Cliente', 'Nombre_Cliente', 'Direccion'])
    const clientes = await Cliente.create(data)
    return response.status(201).json(clientes)
  }

  public async show({ params, response }: HttpContextContract) {
    const clientes = await Cliente.find(params.id)

    if (!clientes) {
      return response.status(404).json({ message: 'Cliente no encontrado' })
    }

    return response.json(clientes)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const clientes = await Cliente.find(params.id)

    if (!clientes) {
      return response.status(404).json({ message: 'Cliente no encontrado' })
    }

    const data = request.only(['ID_Cliente', 'Nombre_Cliente', 'Direccion'])
    clientes.merge(data)
    await clientes.save()

    return response.json(clientes)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const clientes = await Cliente.find(params.id)

    if (!clientes) {
      return response.status(404).json({ message: 'Cliente no encontrado' })
    }

    await clientes.delete()

    return response.status(204)
  }
}
