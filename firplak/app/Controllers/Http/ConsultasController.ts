
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ConsultaController {
  public async entregasCompletasParaCliente({ request, response }: HttpContextContract) {
    const { 
        nombre_cliente,
        fecha_inicio,
        fecha_fin,
        page = 1, // Página por defecto es 1
        perPage = 10, // Cantidad de resultados por página
      } = request.all();
      
      let consulta = Database.from('public.entregas_completas_cliente')
      if (nombre_cliente) consulta.where('nombre_cliente', nombre_cliente)
      if (fecha_inicio) consulta.where('fecha', '>=', fecha_inicio)
      if (fecha_fin) consulta.where('fecha', '<=', fecha_fin)
  
      let result = await consulta.paginate(page, perPage);
      
      return result
  }
  public async ordenesFabricacionPendientes({ response, request }: HttpContextContract) {
    const { 
      page = 1, // Página por defecto es 1
      perPage = 10, // Cantidad de resultados por página
    } = request.all();
    
    let consulta = Database.from('public.ordenes_fabricacion_pendientes')

    let result = await consulta.paginate(page, perPage);
    
    return result
  }

  public async totalVentasYFacturasPorCliente({ request, response }: HttpContextContract) {
    const { 
      page = 1, // Página por defecto es 1
      perPage = 10, // Cantidad de resultados por página
    } = request.all();
    
    let consulta = Database.from('public.total_ventas_facturado_cliente')

    let result = await consulta.paginate(page, perPage);
    
    return result
  }

  public async detallesGuiaTransporteYDocumentosEntrega({ request, response }: HttpContextContract) {
    const { 
      page = 1, // Página por defecto es 1
      perPage = 10, // Cantidad de resultados por página
    } = request.all();
    
    let consulta = Database.from('public.detalles_guia_transporte_documentos')

    let result = await consulta.paginate(page, perPage);
    
    return result
  }

  public async pruebasEntregaParaGuiaTransporte({ request, response }: HttpContextContract) {
    const { 
      page = 1, // Página por defecto es 1
      perPage = 10, // Cantidad de resultados por página
    } = request.all();
    
    let consulta = Database.from('public.pruebas_entrega_guia_especifica')

    let result = await consulta.paginate(page, perPage);
    
    return result
  }
}
