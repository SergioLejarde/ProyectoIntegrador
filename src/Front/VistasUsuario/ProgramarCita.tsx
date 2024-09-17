

const ProgramarCita = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-white p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-8">
            <img
              src="https://placehold.co/50x50"
              alt="Intervital Logo"
              className="mr-2"
            />
          </div>
          <nav className="mb-8">
            <ul>
              <li className="mb-4">
                <button className="flex items-center text-gray-600 w-full text-left p-2 rounded hover:bg-gray-100">
                  <i className="fas fa-calendar-alt mr-2"></i> Agenda
                </button>
              </li>
              <li className="mb-4">
                <button className="flex items-center text-teal-500 w-full text-left p-2 rounded hover:bg-gray-100">
                  <i className="fas fa-calendar-plus mr-2"></i> Programar Cita
                </button>
              </li>
              <li className="mb-4">
                <button className="flex items-center text-gray-600 w-full text-left p-2 rounded hover:bg-gray-100">
                  <i className="fas fa-clock mr-2"></i> Horarios
                </button>
              </li>
              <li className="mb-4">
                <button className="flex items-center text-gray-600 w-full text-left p-2 rounded hover:bg-gray-100">
                  <i className="fas fa-history mr-2"></i> Historial
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-80">
          <ul>
            <li className="mb-4">
              <button className="flex items-center text-gray-600 w-full text-left p-2 rounded hover:bg-gray-100">
                <i className="fas fa-bell mr-2"></i> Notificaciones
              </button>
            </li>
            <li className="mb-4">
              <button className="flex items-center text-gray-600 w-full text-left p-2 rounded hover:bg-gray-100">
                <i className="fas fa-cog mr-2"></i> Ajustes
              </button>
            </li>
          </ul>
          <hr className="my-4" />
          <div className="flex items-center">
            <img
              src="https://placehold.co/50x50"
              alt="User Profile"
              className="rounded-full mr-2"
            />
            <span className="text-gray-600">Alex Montañez</span>
          </div>
        </div>
      </aside>
      <main className="w-3/4 bg-gray-200 p-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-8">AGENDAR CITA</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-4 rounded-full bg-gray-300"
            />
            <input
              type="email"
              placeholder="Correo Electronico"
              className="w-full p-4 rounded-full bg-gray-300"
            />
            <input
              type="tel"
              placeholder="Numero Celular"
              className="w-full p-4 rounded-full bg-gray-300"
            />
            <div className="relative">
              <select className="w-full p-4 rounded-full bg-gray-300 appearance-none">
                <option>Especialista</option>
              </select>
              <i className="fas fa-chevron-down absolute right-4 top-4 text-black"></i>
            </div>
            <div className="relative">
              <select className="w-full p-4 rounded-full bg-gray-300 appearance-none">
                <option>Tipo Cita</option>
              </select>
              <i className="fas fa-chevron-down absolute right-4 top-4 text-black"></i>
            </div>
            <input
              type="date"
              placeholder="Fecha"
              className="w-full p-4 rounded-full bg-gray-300"
            />
            <textarea
              placeholder="Comentarios"
              className="w-full p-4 rounded-lg bg-gray-300 h-32"
            ></textarea>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="w-full p-4 rounded-full bg-green-500 text-white"
              >
                Agendar
              </button>
              <button
                type="button"
                className="w-full p-4 rounded-full bg-red-500 text-white"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProgramarCita;
