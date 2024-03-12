// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import GuiaTransporte from 'App/Models/GuiaTransporte'

// export default class GuiaTransportesController {
//   public async index({ response }: HttpContextContract) {
//     const guias = await GuiaTransporte.all()
//     return response.json(guias)
//   }

//   public async show({ params, response }: HttpContextContract) {
//     const guia = await GuiaTransporte.find(params.id)

//     if (!guia) {
//       return response.status(404).json({ message: 'Guía de transporte no encontrada' })
//     }

//     return response.json(guia)
//   }

//   public async store({ request, response }: HttpContextContract) {
//     const data = request.only(['Numero_Guia', 'Fecha', 'ID_Transportadora'])
//     const guia = await GuiaTransporte.create(data)
//     return response.status(201).json(guia)
//   }

//   public async update({ params, request, response }: HttpContextContract) {
//     const guia = await GuiaTransporte.find(params.id)

//     if (!guia) {
//       return response.status(404).json({ message: 'Guía de transporte no encontrada' })
//     }

//     const data = request.only(['Numero_Guia', 'Fecha', 'ID_Transportadora'])
//     guia.merge(data)
//     await guia.save()

//     return response.json(guia)
//   }

//   public async destroy({ params, response }: HttpContextContract) {
//     const guia = await GuiaTransporte.find(params.id)

//     if (!guia) {
//       return response.status(404).json({ message: 'Guía de transporte no encontrada' })
//     }

//     await guia.delete()
//     return response.status(204)
//   }
// }
