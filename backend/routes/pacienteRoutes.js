import express from 'express'
import checkAuth from '../middleware/authMiddleware.js'
const router = express.Router()
import {
    agregarPaciente, 
    obtenerPacientes,
    obtenerPaciente,
    actualizarPacientes,
    eliminarPaciente
} from '../controllers/pacienteController.js'

router
    .route('/')
    .post(checkAuth, agregarPaciente)
    .get(checkAuth, obtenerPacientes)

router
    .route('/:id')
    .get(checkAuth, obtenerPaciente)
    .put(checkAuth, actualizarPacientes)
    .delete(checkAuth, eliminarPaciente)


export default router;