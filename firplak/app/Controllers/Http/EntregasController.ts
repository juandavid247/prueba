// import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
// import Entrega from "App/Models/Entrega";

// export default class EntregasController {
//   public async index({ request, response }: HttpContextContract) {
//     const { page = 1, perPage = 5 } = request.qs();

//     // Utiliza el método paginate para obtener los resultados paginados
//     const entregas = await Entrega.query().paginate(page, perPage);

//     return response.json(entregas);
//   }
//   public async create({}: HttpContextContract) {
//     // Implementación si es necesario
//   }

//   public async store({ request, response }: HttpContextContract) {
//     const data = request.only([
//       "ID_Guia_Transporte",
//       "ID_Cliente",
//       "ID_Pedido",
//       "Fecha_Despacho",
//       "Fecha_Entrega",
//       "Estado_Entrega",
//       "POD_Recibido",
//       "Fecha_POD_Recibido",
//       "Observaciones",
//       "ID_Transportadora",
//     ]);
//     const entregas = await Entrega.create(data);
//     return response.status(201).json(entregas);
//   }

//   public async show({ params, response }: HttpContextContract) {
//     const entregas = await Entrega.find(params.id);

//     if (!entregas) {
//       return response.status(404).json({ message: "Entrega no encontrada" });
//     }

//     return response.json(entregas);
//   }

//   public async update({ params, request, response }: HttpContextContract) {
//     const entregas = await Entrega.find(params.id);

//     if (!entregas) {
//       return response.status(404).json({ message: "Entrega no encontrada" });
//     }

//     const data = request.only([
//       "ID_Guia_Transporte",
//       "ID_Cliente",
//       "ID_Pedido",
//       "Fecha_Despacho",
//       "Fecha_Entrega",
//       "Estado_Entrega",
//       "POD_Recibido",
//       "Fecha_POD_Recibido",
//       "Observaciones",
//       "ID_Transportadora",
//     ]);
//     entregas.merge(data);
//     await entregas.save();

//     return response.json(entregas);
//   }

//   public async destroy({ params, response }: HttpContextContract) {
//     const entregas = await Entrega.find(params.id);

//     if (!entregas) {
//       return response.status(404).json({ message: "Entrega no encontrada" });
//     }

//     await entregas.delete();

//     return response.status(204);
//   }
// }
