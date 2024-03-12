import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('entregas-completas/:nombre_cliente/:fecha_inicial/:fecha_final', 'ConsultasController.entregasCompletasParaCliente')
  Route.get('ordenes-fabricacion-pendientes', 'ConsultasController.ordenesFabricacionPendientes')
  Route.get('total-ventas-cliente/:fecha_inicial/:fecha_final', 'ConsultasController.totalVentasYFacturasPorCliente')
  Route.get('detalles-guia-transporte/:numero_guia', 'ConsultasController.detallesGuiaTransporteYDocumentosEntrega')
  Route.get('pruebas-entrega-guia-transporte/:numero_guia', 'ConsultasController.pruebasEntregaParaGuiaTransporte')
  Route.post('login', 'loginController.login')
}).prefix('firplak/v1')
