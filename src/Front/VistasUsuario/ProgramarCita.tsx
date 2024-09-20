import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom'; // Cambiado a useNavigate

const ProgramarCita: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    celular: '',
    especialista: '',
    tipoCita: '',
    fecha: '',
    comentarios: ''
  });

  const [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate(); // Cambiado a useNavigate

  // Especificar el tipo de los eventos de entrada
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Especificar el tipo de evento del formulario
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Mostrar modal o realizar alguna acción con los datos
    setModalVisible(true);
  };

  const handleCancel = () => {
    setFormData({
      nombre: '',
      correo: '',
      celular: '',
      especialista: '',
      tipoCita: '',
      fecha: '',
      comentarios: ''
    });
    setModalVisible(false);
  };

  const navigateTo = (path: string) => {
    navigate(path); // Cambiado a navigate
  };

  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-white p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-8">
            <img
              src="/src/Front/assets/img1.png"
              alt="Intervital Logo"
              className="mr-2"
            />
          </div>
          <nav className="mb-8">
            <ul>
              <li className="mb-4">
                <button
                  onClick={() => navigateTo('/agenda')}
                  className="flex items-center text-gray-600 w-full text-left p-2 rounded hover:bg-gray-100"
                >
                  <i className="fas fa-calendar-alt mr-2"></i> Agenda
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => navigateTo('/programar-cita')}
                  className="flex items-center text-teal-500 w-full text-left p-2 rounded hover:bg-gray-100"
                >
                  <i className="fas fa-calendar-plus mr-2"></i> Programar Cita
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => navigateTo('/horarios')}
                  className="flex items-center text-gray-600 w-full text-left p-2 rounded hover:bg-gray-100"
                >
                  <i className="fas fa-clock mr-2"></i> Horarios
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => navigateTo('/historial')}
                  className="flex items-center text-gray-600 w-full text-left p-2 rounded hover:bg-gray-100"
                >
                  <i className="fas fa-history mr-2"></i> Historial
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <ul>
            <li className="mb-4">
              <button
                onClick={() => navigateTo('/notificaciones')}
                className="flex items-center text-gray-600 w-full text-left p-2 rounded hover:bg-gray-100"
              >
                <i className="fas fa-bell mr-2"></i> Notificaciones
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => navigateTo('/ajustes')}
                className="flex items-center text-gray-600 w-full text-left p-2 rounded hover:bg-gray-100"
              >
                <i className="fas fa-cog mr-2"></i> Ajustes
              </button>
            </li>
          </ul>
          <hr className="my-4" />
          <div className="flex items-center">
            <img
              src="/src/Front/assets/img1.png"
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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Nombre"
              className="w-full p-4 rounded-full bg-gray-300"
              required
            />
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleInputChange}
              placeholder="Correo Electrónico"
              className="w-full p-4 rounded-full bg-gray-300"
              required
            />
            <input
              type="tel"
              name="celular"
              value={formData.celular}
              onChange={handleInputChange}
              placeholder="Número Celular"
              className="w-full p-4 rounded-full bg-gray-300"
              required
            />
            <div className="relative">
              <select
                name="especialista"
                value={formData.especialista}
                onChange={handleInputChange}
                className="w-full p-4 rounded-full bg-gray-300 appearance-none"
                required
              >
                <option value="">Especialista</option>
                <option value="Dr. Lopez">Dr. Lopez</option>
                <option value="Dra. Martinez">Dra. Martinez</option>
              </select>
              <i className="fas fa-chevron-down absolute right-4 top-4 text-black"></i>
            </div>
            <div className="relative">
              <select
                name="tipoCita"
                value={formData.tipoCita}
                onChange={handleInputChange}
                className="w-full p-4 rounded-full bg-gray-300 appearance-none"
                required
              >
                <option value="">Tipo Cita</option>
                <option value="Consulta General">Consulta General</option>
                <option value="Especialidad">Especialidad</option>
              </select>
              <i className="fas fa-chevron-down absolute right-4 top-4 text-black"></i>
            </div>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleInputChange}
              className="w-full p-4 rounded-full bg-gray-300"
              required
            />
            <textarea
              name="comentarios"
              value={formData.comentarios}
              onChange={handleInputChange}
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
                onClick={handleCancel}
                className="w-full p-4 rounded-full bg-red-500 text-white"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
        {isModalVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
              <h2 className="text-xl font-bold mb-4">Detalles de la cita</h2>
              <p><strong>Nombre:</strong> {formData.nombre}</p>
              <p><strong>Correo:</strong> {formData.correo}</p>
              <p><strong>Celular:</strong> {formData.celular}</p>
              <p><strong>Especialista:</strong> {formData.especialista}</p>
              <p><strong>Tipo de Cita:</strong> {formData.tipoCita}</p>
              <p><strong>Fecha:</strong> {formData.fecha}</p>
              <p><strong>Comentarios:</strong> {formData.comentarios}</p>
              <button
                onClick={() => setModalVisible(false)}
                className="mt-4 p-4 rounded-full bg-blue-500 text-white w-full"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProgramarCita;
