import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <img src="https://placehold.co/150x50/5BCEFA/FFF?text=INTERVITAL" alt="INTERVITAL logo" className="mb-8" />
          <nav>
            <ul className="space-y-2">
              <li><a href="#" className="flex items-center text-blue-500"><i className="fas fa-tachometer-alt mr-3"></i> Dashboard</a></li>
              <li><a href="#" className="flex items-center text-gray-600"><i className="fas fa-users mr-3"></i> Usuarios</a></li>
              <li><a href="#" className="flex items-center text-gray-600"><i className="fas fa-calendar-alt mr-3"></i> Citas</a></li>
              <li><a href="#" className="flex items-center text-gray-600"><i className="fas fa-file-alt mr-3"></i> Reportes</a></li>
              <li><a href="#" className="flex items-center text-gray-600"><i className="fas fa-cog mr-3"></i> Configuraciones</a></li>
              <li><a href="#" className="flex items-center text-gray-600"><i className="fas fa-sign-out-alt mr-3"></i> Salir</a></li>
            </ul>
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 w-64 p-4 border-t">
          <div className="flex items-center">
            <img src="https://placehold.co/40x40" alt="Profile picture of admin" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-medium">Admin Juan Perez</p>
              <p className="text-sm text-gray-600">Administrador</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden p-4">
        {/* Header */}
        <div className="bg-white shadow-sm p-4 mb-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <input type="text" placeholder="Buscar..." className="p-2 border rounded-md" />
        </div>

        {/* Dashboard Content */}
        <div className="flex space-x-4 mb-4">
          {/* Overview Cards */}
          <div className="flex-1 space-y-4">
            <div className="bg-white p-4 rounded-md shadow">
              <h2 className="text-lg font-medium mb-4">Resumen General</h2>
              <div className="flex space-x-4">
                <div className="flex-1 bg-gray-100 p-4 rounded-md relative">
                  <h3 className="text-lg font-medium">Usuarios Activos</h3>
                  <p className="text-4xl font-bold">123</p>
                  <i className="fas fa-users text-3xl text-gray-400 absolute bottom-4 right-4"></i>
                </div>
                <div className="flex-1 bg-gray-100 p-4 rounded-md relative">
                  <h3 className="text-lg font-medium">Citas Programadas</h3>
                  <p className="text-4xl font-bold">45</p>
                  <i className="fas fa-calendar-alt text-3xl text-gray-400 absolute bottom-4 right-4"></i>
                </div>
                <div className="flex-1 bg-gray-100 p-4 rounded-md relative">
                  <h3 className="text-lg font-medium">Reportes Generados</h3>
                  <p className="text-4xl font-bold">78</p>
                  <i className="fas fa-file-alt text-3xl text-gray-400 absolute bottom-4 right-4"></i>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md shadow">
              <h2 className="text-lg font-medium mb-4">Últimos Reportes</h2>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th className="pb-2">Fecha</th>
                    <th className="pb-2">Tipo</th>
                    <th className="pb-2">Detalles</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr key={i} className="border-t">
                      <td className="py-2">12/10/2024</td>
                      <td className="py-2">Reporte de Citas</td>
                      <td className="py-2"><a href="#" className="text-blue-500">Ver Reporte</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="w-80 bg-white p-4 rounded-md shadow">
            <h2 className="text-lg font-medium mb-4">Actividades Recientes</h2>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-gray-100 p-4 rounded-md">
                  <p className="font-medium">Actividad #{i + 1}</p>
                  <p className="text-sm text-gray-600">Detalles de la actividad reciente...</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="bg-white p-4 rounded-md shadow">
          <h2 className="text-lg font-medium mb-4">Configuraciones Rápidas</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-500 text-white p-4 rounded-md">Gestión de Usuarios</button>
            <button className="bg-green-500 text-white p-4 rounded-md">Gestión de Citas</button>
            <button className="bg-orange-500 text-white p-4 rounded-md">Generar Reportes</button>
            <button className="bg-red-500 text-white p-4 rounded-md">Configuraciones</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
