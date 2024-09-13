import React from 'react';

const Agenda = () => {
  return (
    <div className="flex">
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
                <button className="flex items-center text-teal-500 w-full text-left p-2 rounded hover:bg-gray-100">
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
                <button className="flex items-center text-gray-600 font-bold w-full text-left p-2 rounded hover:bg-gray-100">
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
      <main className="w-4/5 p-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full p-2 rounded-lg border border-gray-300"
          />
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://placehold.co/100x100"
                alt="Doctor's Profile"
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-bold">DR. Monserrate</h2>
                <p>Cita :#278934</p>
                <p>Cardiologo</p>
                <p>Cita : 12/10/2024</p>
                <p>Hora: 14:00 p.m</p>
              </div>
            </div>
            <div className="space-x-2">
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Cancelar
              </button>
              <button className="bg-orange-400 text-white px-4 py-2 rounded">
                Reprogramar
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://placehold.co/100x100"
                alt="Doctor's Profile"
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-bold">DR. Carvajal</h2>
                <p>Cita :#208789</p>
                <p>Optetra</p>
                <p>Fecha : 24/10/2024</p>
                <p>Hora: 09:00 a.m</p>
              </div>
            </div>
            <div className="space-x-2">
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Cancelar
              </button>
              <button className="bg-orange-400 text-white px-4 py-2 rounded">
                Reprogramar
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://placehold.co/100x100"
                alt="Doctor's Profile"
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-bold">DR. Martinez</h2>
                <p>Cita :#208907</p>
                <p>Hepatologia</p>
                <p>Fecha : 26/10/2024</p>
                <p>Hora: 10:00 a.m</p>
              </div>
            </div>
            <div className="space-x-2">
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Cancelar
              </button>
              <button className="bg-orange-400 text-white px-4 py-2 rounded">
                Reprogramar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Agenda;
