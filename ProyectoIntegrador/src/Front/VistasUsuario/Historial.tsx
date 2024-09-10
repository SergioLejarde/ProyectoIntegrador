import React from 'react';

const Historial = () => {
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
                <button className="flex items-center text-gray-600 w-full text-left p-2 rounded hover:bg-gray-100">
                  <i className="fas fa-clock mr-2"></i> Horarios
                </button>
              </li>
              <li className="mb-4">
                <button className="flex items-center text-teal-500 font-bold w-full text-left p-2 rounded hover:bg-gray-100">
                  <i className="fas fa-history mr-2"></i> Historial
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <ul>
            <li className="mt-80">
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
      <main className="w-3/4 bg-gray-200 p-6">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full p-3 rounded-lg border border-gray-300"
          />
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <img
                src="https://placehold.co/50x50"
                alt="Doctor Monserrate"
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-bold">DR. Monserrate</h2>
                <p className="text-gray-600">Cita :#2089</p>
                <p className="text-gray-600">Cita : 20/10/2024</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-gray-600">Cardiologo</p>
                <p className="text-gray-600">Hora: 8:00 a.m</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <img
                src="https://placehold.co/50x50"
                alt="Doctor Peralta"
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-bold">DR. Peralta</h2>
                <p className="text-gray-600">Cita :#2089</p>
                <p className="text-gray-600">Cita : 19/10/2014</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-gray-600">Cardiologo</p>
                <p className="text-gray-600">Hora: 14:00 p.m</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <img
                src="https://placehold.co/50x50"
                alt="Doctor Montero"
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-bold">DR. Montero</h2>
                <p className="text-gray-600">Cita :#2089</p>
                <p className="text-gray-600">Cita : 19:00</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-gray-600">Cardiologo</p>
                <p className="text-gray-600">Hora: 16:00 p.m</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Historial;
