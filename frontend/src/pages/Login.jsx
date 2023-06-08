const Login = () => {
    return (
        <>
            <div className="bg-auto bg-no-repeat bg-center bg-[url('/public/veterinario.jpg')]">     
                <h1 className="text-teal-600 font-black text-6xl">
                    Inicia Sesión y Administra tus 
                    <span className="text-black"> Pacientes</span>
                </h1>
            </div>
            <div>
                <form className="bg-white rounded-md">
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Email
                        </label>
                        <input 
                            type="email" 
                            className="border w-full p-3 bg-gray-50 rounded-xl border-gray-200 mt-3"
                            placeholder="Email de Registro"
                        />
                    </div>
                    <div className="my-5">
                        <label
                                className="uppercase text-gray-600 block text-xl font-bold"
                            >
                            Password
                        </label>
                        <input 
                            type="password" 
                            className="w-full border p-3 bg-gray-50 rounded-xl border-gray-200 mt-3"
                            placeholder="Tu password" 
                        />
                    </div>

                    <input
                        type="submit"
                        value="Iniciar Sesión"
                        className="mt-5 py-3 px-10 font-bold text-white w-full rounded-xl uppercase hover:cursor-pointer bg-teal-700 hover:bg-teal-800 md:w-auto"
                    />
                </form>
            </div>
            
        </>
    )
}

export default Login