import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <img src="https://placehold.co/150x50/5BCEFA/FFF?text=INTERVITAL" alt="INTERVITAL logo" className="mb-8" />
          <nav>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleTabChange('dashboard')}
                  className={`flex items-center w-full text-left px-4 py-2 ${
                    activeTab === 'dashboard' ? 'text-blue-500' : 'text-gray-600'
                  }`}
                >
                  <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabChange('activeUsers')}
                  className={`flex items-center w-full text-left px-4 py-2 ${
                    activeTab === 'activeUsers' ? 'text-blue-500' : 'text-gray-600'
                  }`}
                >
                  <i className="fas fa-users mr-3"></i> Usuarios Activos
                </button>
              </li>
              {/* Otras opciones de la barra lateral */}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden p-4">
        {/* Header */}
        <div className="bg-white shadow-sm p-4 mb-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Panel de Administración</h1>
        </div>

        {/* Contenido basado en la pestaña activa */}
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-lg font-medium mb-4">Resumen General</h2>
            <div className="flex space-x-4">
              <div className="flex-1 bg-gray-100 p-4 rounded-md relative">
                <h3 className="text-lg font-medium">Usuarios Activos</h3>
                <p className="text-4xl font-bold">123</p>
                <i className="fas fa-users text-3xl text-gray-400 absolute bottom-4 right-4"></i>
              </div>
              {/* Otras tarjetas */}
            </div>
          </div>
        )}

        {/* Pestaña de Usuarios Activos */}
        {activeTab === 'activeUsers' && (
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-4">Usuarios Activos</h1>
            <table className="min-w-full bg-white">
              <thead>
                <tr className="w-full bg-gray-200 text-left">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Nombre</th>
                  <th className="px-4 py-2">Rol</th>
                  <th className="px-4 py-2">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Juan Pérez</td>
                  <td className="px-4 py-2">Doctor</td>
                  <td className="px-4 py-2">Activo</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">Ana Gómez</td>
                  <td className="px-4 py-2">Enfermera</td>
                  <td className="px-4 py-2">Activo</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">Pedro Rodríguez</td>
                  <td className="px-4 py-2">Recepcionista</td>
                  <td className="px-4 py-2">Activo</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
