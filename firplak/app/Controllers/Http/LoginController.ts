import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuarios'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async login({ request, response }: HttpContextContract) {
    try {
      const { correo_electronico, password } = request.all()

      // Buscar usuario por correo electrónico
      const usuario = await Usuario.findBy('correo_electronico', correo_electronico)

      // Si no se encuentra el usuario, retornar error
      if (!usuario) {
        return response.status(404).json({ message: 'Usuario no encontrado' })
      }

      // Verificar contraseña
      const passwordValido = await Hash.verify(usuario.password, password)
      if (!passwordValido) {
        return response.status(401).json({ message: 'Contraseña incorrecta' })
      }

      return response.status(200).json({ message: 'Inicio de sesión exitoso' })
    } catch (error) {
      console.error(error)
      return response.status(500).json({ message: 'Ha ocurrido un error interno' })
    }
  }

  // public async store({ request, response }: HttpContextContract) {
  //   try {
  //     const { nombre_usuario, correo_electronico, password, rol, estado } = request.all()

  //     // Verificar si ya existe un usuario con el mismo correo electrónico
  //     const existingUser = await Usuario.findBy('correo_electronico', correo_electronico)
  //     if (existingUser) {
  //       return response.status(400).json({ message: 'Ya existe un usuario con este correo electrónico' })
  //     }

  //     // Crear un nuevo usuario
  //     const hashedPassword = await Hash.make(password)
  //     const newUser = await Usuario.create({
  //       nombre_usuario,
  //       correo_electronico,
  //       password: hashedPassword,
  //       rol,
  //       estado
  //       // Aquí puedes agregar más campos si es necesario
  //     })

  //     return response.status(201).json({ message: 'Usuario creado exitosamente', data: newUser })
  //   } catch (error) {
  //     console.error(error)

  //     // Manejar otros errores
  //     return response.status(500).json({ message: 'Ha ocurrido un error interno' })
  //   }
  // }
}

