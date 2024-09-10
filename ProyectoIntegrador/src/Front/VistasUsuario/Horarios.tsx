import React from 'react';

const Horarios = () => {
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
                <button className="flex items-center text-gray-600 w-full text-left p-2 rounded hover:bg-gray-100">
                  <i className="fas fa-calendar-plus mr-2"></i> Programar Cita
                </button>
              </li>
              <li className="mb-4">
                <button className="flex items-center text-teal-500 w-full text-left p-2 rounded hover:bg-gray-100">
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
        <div>
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
      <main className="w-3/4 bg-gray-200 p-20">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-8">HORARIOS</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 px-4 text-left">Especialista</th>
                <th className="border-b py-2 px-4 text-left">Día</th>
                <th className="border-b py-2 px-4 text-left">Hora</th>
                <th className="border-b py-2 px-4 text-left">Disponibilidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b py-2 px-4">Dr. Monserrate</td>
                <td className="border-b py-2 px-4">Lunes</td>
                <td className="border-b py-2 px-4">8:00 a.m - 12:00 p.m</td>
                <td className="border-b py-2 px-4">Disponible</td>
              </tr>
              <tr>
                <td className="border-b py-2 px-4">Dr. Peralta</td>
                <td className="border-b py-2 px-4">Martes</td>
                <td className="border-b py-2 px-4">2:00 p.m - 6:00 p.m</td>
                <td className="border-b py-2 px-4">Disponible</td>
              </tr>
              <tr>
                <td className="border-b py-2 px-4">Dr. Montero</td>
                <td className="border-b py-2 px-4">Viernes</td>
                <td className="border-b py-2 px-4">9:00 a.m - 1:00 p.m</td>
                <td className="border-b py-2 px-4">No Disponible</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Horarios;
