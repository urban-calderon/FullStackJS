import jwt from 'jsonwebtoken'
import Veterinario from '../models/Veterinario.js'

const checkAuth = async (req, res, next) => {
    let token

    const { authorization } = req.headers

    // Verificar si contiene el token con bearer
    if(authorization && authorization.startsWith('Bearer')) {
        try {
            token = authorization.split(' ')[1]
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // .select permite mostrar los datos que tu le definas
            req.veterinario = await Veterinario.findById(decoded.id).select(
                "-password -token -confirmado" 
            )

            return next()
        } catch (error) {
            const e = new Error('Token no válido')
            return res.status(403).json({msg: e.message})
        }
    } 

    if(!token) {
        const error = new Error('Token no válido o inexistente')
            res.status(403).json({msg: error.message})
    }
    next()
}

export default checkAuth