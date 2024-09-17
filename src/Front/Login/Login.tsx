import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Definimos el tipo de usuario registrado con su tipo de rol
interface RegisteredUser {
  email: string;
  password: string;
  role: "paciente" | "medico" | "administrador";
}

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre Login y Register
  const [email, setEmail] = useState(""); // Estado del correo electrónico
  const [password, setPassword] = useState(""); // Estado de la contraseña
  const [errorMessage, setErrorMessage] = useState(""); // Estado del mensaje de error

  const navigate = useNavigate(); // Usado para redirigir a otra ventana

  // Lista de usuarios permitidos con sus roles
  const allowedUsers: RegisteredUser[] = [
    { email: "paciente@correo.com", password: "paciente123", role: "paciente" },
    { email: "medico@correo.com", password: "medico123", role: "medico" },
    { email: "admin@correo.com", password: "admin123", role: "administrador" }
  ];

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const foundUser = allowedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      switch (foundUser.role) {
        case "paciente":
          navigate("/agenda-usuario"); // Redirigir a la página del paciente
          break;
        case "medico":
          navigate("/inicio"); // Redirigir a la página del médico
          break;
        case "administrador":
          navigate("/adminDashBoard"); // Redirigir a la página del administrador
          break;
        default:
          setErrorMessage("Usuario o contraseña incorrectos");
      }
    } else {
      setErrorMessage("Usuario o contraseña incorrectos");
    }
  };

  // Funciones para manejar la navegación
  const handleServiciosClick = () => {
    navigate("/servicios");
  };

  const handleNosotrosClick = () => {
    navigate("/quienes-somos");
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: "url('/src/Front/assets/FondoLogin.jpg')" }}
    >
      <header className="bg-blue-500 text-white p-4 relative mb-20">
        <div className="absolute left-5 top-5 bg-white p-2 rounded-full border-2 border-black">
          <img
            src="/src/Front/assets/Logo.png"
            alt="Company Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="flex justify-end pl-96 ml-96">
          <nav className="flex space-x-5">
            <a
              href="#"
              className="text-white mx-3 hover:border-1 hover:border-white pb-0"
              onClick={handleServiciosClick}
            >
              SERVICIOS
            </a>
            <a
              href="#"
              className="text-white mx-3 hover:border-1 hover:border-white pb-1"
              onClick={handleNosotrosClick}
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
              onClick={() => setIsLogin(true)}
              className={`text-white p-2 w-1/2 transition-all duration-300 ease-in-out ${
                isLogin ? "border-b-2 border-white" : "opacity-50"
              }`}
            >
              Login
            </button>
          </div>

          {isLogin && (
            <form onSubmit={handleLogin} className="space-y-6 transition-all duration-500 ease-in-out">
              <div className="mb-4">
                <label className="block text-white mb-2">Correo Electrónico:</label>
                <div className="flex items-center bg-white rounded-full p-2">
                  <i className="fas fa-envelope text-gray-500 mr-3"></i>
                  <input
                    type="email"
                    className="w-full bg-transparent border-none focus:outline-none"
                    placeholder="Ingresa tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {errorMessage && (
                <p className="text-red-500 text-center">{errorMessage}</p>
              )}
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-900 text-blue-600 font-bold rounded-full transition duration-300 ease-in-out hover:bg-white"
                >
                  Iniciar Sesión
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
