// import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
// import Pedido from "App/Models/Pedido";

// export default class PedidosController {
//   /**
//    * Método para obtener todos los pedidos
//    */
//   public async index({ response }: HttpContextContract) {
//     const pedidos = await Pedido.all();
//     return response.json(pedidos);
//   }

//   /**
//    * Método para crear un nuevo pedido
//    */
//   public async store({ request, response }: HttpContextContract) {
//     const data = request.only(["ID_Pedido", "Numero_Pedido"]);
//     const pedido = await Pedido.create(data);
//     return response.status(201).json(pedido);
//   }

//   /**
//    * Método para obtener un pedido por su ID
//    */
//   public async show({ params, response }: HttpContextContract) {
//     const pedido = await Pedido.findOrFail(params.id_pedido);
//     return response.json(pedido);
//   }

//   /**
//    * Método para actualizar un pedido
//    */
//   public async update({ params, request, response }: HttpContextContract) {
//     const pedido = await Pedido.findOrFail(params.id_pedido);
//     const data = request.only(["ID_Pedido", "Numero_Pedido"]);
//     pedido.merge(data);
//     await pedido.save();
//     return response.json(pedido);
//   }

//   /**
//    * Método para eliminar un pedido
//    */
//   public async destroy({ params, response }: HttpContextContract) {
//     const pedido = await Pedido.findOrFail(params.id_pedido);
//     await pedido.delete();
//     return response.status(204);
//   }
// }
