import React, { useState, useEffect } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre Login y Register
  const [showIcons, setShowIcons] = useState(false); // Estado para mostrar los íconos

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setShowIcons(!isLogin); // Mostrar los íconos solo cuando se selecciona "Register"
  };

  useEffect(() => {
    let timer;
    if (showIcons) {
      timer = setTimeout(() => setShowIcons(false), 5000); // Ocultar los íconos después de 5 segundos
    }
    return () => clearTimeout(timer);
  }, [showIcons]);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: "url('/src/Front/assets/FondoLogin.jpg')" }}
    >
      <header className="bg-blue-500 text-white p-4 relative mb-20">
        <div className="absolute left-5 top-5 bg-white p-2 rounded-full border-2 border-black">
          <img
            src="/src/Front/assets/Logo.png" // Ajusta la ruta según la ubicación de tu logo
            alt="Company Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="flex justify-end pl-96 ml-96">
          <nav className="flex space-x-5">
            <a
              href="#"
              className="text-white mx-3 hover:border-1 hover:border-white pb-0"
            >
              SERVICIOS
            </a>
            <a
              href="#"
              className="text-white mx-3 hover:border-1 hover:border-white pb-1"
            >
              NOSOTROS
            </a>
            <a
              href="#"
              className="text-white mx-3 border-b-2 border-white pb-1"
            >
              LOGIN
            </a>
          </nav>
        </div>
      </header>

      <div className="flex justify-center items-center h-screen">
        {/* Contenedor de íconos de salud que aparece en Register */}
        {showIcons && (
          <div className="absolute flex space-x-4 transform translate-y-10 animate-bounce">
            <i className="fas fa-plus-circle text-white text-4xl"></i>
            <i className="fas fa-heartbeat text-red-600 text-4xl"></i>
            <i className="fas fa-stethoscope text-white text-4xl"></i>
          </div>
        )}

        <div className="bg-blue-600 rounded-3xl p-8 max-w-100px h-auto relative border-2 border-white transition-all duration-500 ease-in-out transform">
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
            <img
              src="/src/Front/assets/Logo.png"
              alt="Intervital logo"
              className="w-24 h-24"
            />
          </div>
          <div className="flex justify-center mb-6 mt-10">
            <button
              onClick={toggleForm}
              className={`text-white p-2 w-1/2 transition-all duration-300 ease-in-out ${
                isLogin ? "border-b-2 border-white" : "opacity-50"
              }`}
            >
              Login
            </button>
            <button
              onClick={toggleForm}
              className={`text-white p-2 w-1/2 transition-all duration-300 ease-in-out ${
                !isLogin ? "border-b-2 border-white" : "opacity-50"
              }`}
            >
              Register
            </button>
          </div>

          {isLogin ? (
            <form className="space-y-6 transition-all duration-500 ease-in-out ">
              <div className="mb-4 w-80px">
                <label className="block text-white mb-2">Usuario:</label>
                <div className="flex items-center bg-white rounded-full p-2">
                  <i className="fas fa-user text-gray-500 mr-3"></i>
                  <input
                    type="text"
                    className="w-full bg-transparent border-none focus:outline-none"
                    placeholder="Ingresa tu usuario"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2">Contraseña:</label>
                <div className="flex items-center bg-white rounded-full p-2">
                  <i className="fas fa-lock text-gray-500 mr-3"></i>
                  <input
                    type="password"
                    className="w-full bg-transparent border-none focus:outline-none"
                    placeholder="Ingresa tu contraseña"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-900 text-blue-600 font-bold rounded-full transition duration-300 ease-in-out hover:bg-white"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          ) : (
            <form className="space-y-8 transition-all duration-500 ease-in-out">
              <div className="grid grid-cols-4 md:grid-cols-3 gap-4">
                <div className="col-span-1 mb-6">
                  <label className="block text-white mb-2">Nombre:</label>
                  <div className="flex items-center bg-white rounded-full p-2">
                    <i className="fas fa-user text-gray-500 mr-3"></i>
                    <input
                      type="text"
                      className="w-full bg-transparent border-none focus:outline-none"
                      placeholder="Ingresa tu nombre"
                    />
                  </div>
                </div>
                <div className="col-span-1 mb-6">
                  <label className="block text-white mb-2">Apellido:</label>
                  <div className="flex items-center bg-white rounded-full p-2">
                    <i className="fas fa-user text-gray-500 mr-3"></i>
                    <input
                      type="text"
                      className="w-full bg-transparent border-none focus:outline-none"
                      placeholder="Ingresa tu apellido"
                    />
                  </div>
                </div>
                <div className="col-span-1 mb-6">
                  <label className="block text-white mb-2">Cédula:</label>
                  <div className="flex items-center bg-white rounded-full p-2">
                    <i className="fas fa-id-card text-gray-500 mr-3"></i>
                    <input
                      type="text"
                      className="w-full bg-transparent border-none focus:outline-none"
                      placeholder="Ingresa tu cédula"
                    />
                  </div>
                </div>
                <div className="col-span-1 mb-6">
                  <label className="block text-white mb-2">
                    Número de Teléfono:
                  </label>
                  <div className="flex items-center bg-white rounded-full p-2">
                    <i className="fas fa-phone text-gray-500 mr-3"></i>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-none focus:outline-none"
                      placeholder="Ingresa tu número"
                    />
                  </div>
                </div>
                <div className="col-span-1 mb-6">
                  <label className="block text-white mb-2">
                    Fecha de Nacimiento:
                  </label>
                  <div className="flex items-center bg-white rounded-full p-2">
                    <i className="fas fa-calendar text-gray-500 mr-3"></i>
                    <input
                      type="date"
                      className="w-full bg-transparent border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-1 mb-6">
                  <label className="block text-white mb-2">Celular:</label>
                  <div className="flex items-center bg-white rounded-full p-2">
                    <i className="fas fa-mobile-alt text-gray-500 mr-3"></i>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-none focus:outline-none"
                      placeholder="Ingresa tu celular"
                    />
                  </div>
                </div>
                <div className="col-span-3 mb-6">
                  <label className="block text-white mb-2">Dirección:</label>
                  <div className="flex items-center bg-white rounded-full p-2">
                    <i className="fas fa-home text-gray-500 mr-3"></i>
                    <input
                      type="text"
                      className="w-full bg-transparent border-none focus:outline-none"
                      placeholder="Ingresa tu dirección"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="p-4 bg-blue-900 text-blue-600 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-white"
                >
                  Registrarse
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
