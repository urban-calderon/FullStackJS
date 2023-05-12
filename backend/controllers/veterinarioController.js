
const registrar = (req, res) => {
    res.json({ msg: 'Registrando usuarios..'})
}

const perfil = (req, res) => {
    res.json({ msg: 'Mostrando perfil..'})
}

export { registrar, perfil }