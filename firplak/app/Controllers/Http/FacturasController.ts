// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Factura from 'App/Models/Factura'

// export default class FacturasController {
//   /**
//    * Obtener todas las facturas
//    */
//   public async index({ response }: HttpContextContract) {
//     const facturas = await Factura.all()
//     return response.json(facturas)
//   }

//   /**
//    * Crear una nueva factura
//    */
//   public async store({ request, response }: HttpContextContract) {
//     const data = request.only(['Numero_Factura', 'Fecha_Factura', 'ID_Entrega'])
//     const facturas = await Factura.create(data)
//     return response.status(201).json(facturas)
//   }

//   /**
//    * Mostrar detalles de una factura específica
//    */
//   public async show({ params, response }: HttpContextContract) {
//     const facturas = await Factura.find(params.id)

//     if (!facturas) {
//       return response.status(404).json({ message: 'Factura no encontrada' })
//     }

//     return response.json(facturas)
//   }

//   /**
//    * Actualizar una factura existente
//    */
//   public async update({ params, request, response }: HttpContextContract) {
//     const facturas = await Factura.find(params.id)

//     if (!facturas) {
//       return response.status(404).json({ message: 'Factura no encontrada' })
//     }

//     const data = request.only(['Numero_Factura', 'Fecha_Factura', 'ID_Entrega'])
//     facturas.merge(data)
//     await facturas.save()

//     return response.json(facturas)
//   }

//   /**
//    * Eliminar una factura
//    */
//   public async destroy({ params, response }: HttpContextContract) {
//     const facturas = await Factura.find(params.id)

//     if (!facturas) {
//       return response.status(404).json({ message: 'Factura no encontrada' })
//     }

//     await facturas.delete()

//     return response.status(204)
//   }
// }
