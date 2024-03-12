// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Transportadora from 'App/Models/Transportadora'

// export default class TransportadorasController {
//   /**
//    * Obtener todas las transportadoras
//    */
//   public async index({ response }: HttpContextContract) {
//     const transportadoras = await Transportadora.all()
//     return response.json(transportadoras)
//   }

//   /**
//    * Crear una nueva transportadora
//    */
//   public async store({ request, response }: HttpContextContract) {
//     const data = request.only(['Nombre', 'Plataforma_Web'])
//     const transportadora = await Transportadora.create(data)
//     return response.status(201).json(transportadora)
//   }

//   /**
//    * Mostrar detalles de una transportadora específica
//    */
//   public async show({ params, response }: HttpContextContract) {
//     const transportadora = await Transportadora.find(params.id)

//     if (!transportadora) {
//       return response.status(404).json({ message: 'Transportadora no encontrada' })
//     }

//     return response.json(transportadora)
//   }

//   /**
//    * Actualizar una transportadora existente
//    */
//   public async update({ params, request, response }: HttpContextContract) {
//     const transportadora = await Transportadora.find(params.id)

//     if (!transportadora) {
//       return response.status(404).json({ message: 'Transportadora no encontrada' })
//     }

//     const data = request.only(['Nombre', 'Plataforma_Web'])
//     transportadora.merge(data)
//     await transportadora.save()

//     return response.json(transportadora)
//   }

//   /**
//    * Eliminar una transportadora
//    */
//   public async destroy({ params, response }: HttpContextContract) {
//     const transportadora = await Transportadora.find(params.id)

//     if (!transportadora) {
//       return response.status(404).json({ message: 'Transportadora no encontrada' })
//     }

//     await transportadora.delete()

//     return response.status(204)
//   }
// }
