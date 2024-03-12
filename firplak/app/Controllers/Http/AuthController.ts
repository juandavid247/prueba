'use strict'

import Usuario from 'App/Models/Usuarios'

class AuthController {
    async login ({ request, auth, response }) {
      const { correo_electronico, password } = request.all()
  
      try {
        // Buscar al usuario por correo electrónico
        const user = await Usuario.findBy('correo_electronico', correo_electronico)
  
        if (!user) {
          return response.status(404).json({ message: 'Usuario no encontrado' })
        }
  
        // Comparar la contraseña en texto plano
        if (user.password !== password) {
          return response.status(401).json({ message: 'Contraseña incorrecta' })
        }
  
        // Generar token de autenticación
        const token = await auth.generate(user)
  
        return response.json({ token })
      } catch (error) {
        console.error(error)
        return response.status(500).json({ message: 'Error en el servidor' })
      }
    }
  }
  
  module.exports = AuthController
