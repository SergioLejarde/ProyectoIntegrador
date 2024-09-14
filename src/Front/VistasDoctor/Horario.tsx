import { FaClipboard, FaCalendarAlt, FaUser, FaClock, FaPills, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Horario = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-4">
                    <img src="https://placehold.co/100x40/5BCEFA/FFF?text=INTERVITAL" alt="INTERVITAL logo" className="mb-8" />
                    <nav>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="flex items-center text-gray-600">
                                    <FaClipboard className="mr-3" /> General
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-gray-600">
                                    <FaCalendarAlt className="mr-3" /> Citas
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-gray-600">
                                    <FaUser className="mr-3" /> Pacientes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-blue-500">
                                    <FaClock className="mr-3" /> Horarios
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-gray-600">
                                    <FaPills className="mr-3" /> Medicación
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-gray-600">
                                    <FaEnvelope className="mr-3" /> Mensajes
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="absolute bottom-0 left-0 w-64 p-4">
                    <div className="flex items-center">
                        <img src="/src/Front/assets/Doctor.jpg" alt="Doctor profile picture" className="rounded-full mr-3" />
                        <div>
                            <p className="font-semibold">Dr Alex Montañez</p>
                            <p className="text-sm text-gray-600">Neumólogo</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <input type="text" placeholder="Buscar" className="w-full p-2 border rounded-md" />
                    </div>

                    {/* Doctor Info */}
                    <div className="bg-white rounded-lg shadow p-4 mb-6 flex">
                        <img src="https://placehold.co/100x100" alt="Doctor profile picture" className="rounded-lg mr-4" />
                        <div>
                            <h2 className="text-xl font-bold">Dr. Emmanuel Santos</h2>
                            <p>Género: Hombre <span className="ml-4">Edad: 20</span></p>
                            <p>Teléfono: <input type="text" placeholder="321456789" className="border p-1 rounded-md" /></p>
                            <p>Email: <input type="email" placeholder="emmaprogamer@777.com" className="border p-1 rounded-md" /></p>
                        </div>
                    </div>

                    {/* Patient List */}
                    {[1, 2, 3].map((_, index) => (
                        <div key={index} className="bg-white rounded-lg shadow p-4 mb-4 flex justify-between">
                            <div className="flex items-center">
                                <img src="https://placehold.co/50x50" alt="Patient profile picture" className="rounded-full mr-4" />
                                <div>
                                    <h3 className="font-semibold">Juan Nicolas Rey Vasquez</h3>
                                    <p>Género: Hombre <span className="ml-4">Edad: 20</span></p>
                                    <p>Cita: <input type="time" value="19:00" className="border p-1 rounded-md" /></p>
                                </div>
                            </div>
                            <div className="w-1/3">
                                <p className="font-semibold">Motivo de Consulta:</p>
                                <textarea className="bg-gray-100 w-full h-16 rounded border p-2" placeholder="Escriba aquí..."></textarea>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Calendar */}
            <div className="w-64 p-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex justify-between items-center mb-4">
                        <button className="text-gray-600"><FaChevronLeft /></button>
                        <h2 className="font-semibold">September 2024</h2>
                        <button className="text-gray-600"><FaChevronRight /></button>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="py-2 text-xs text-gray-500">SUN</th>
                                <th className="py-2 text-xs text-gray-500">MON</th>
                                <th className="py-2 text-xs text-gray-500">TUE</th>
                                <th className="py-2 text-xs text-gray-500">WED</th>
                                <th className="py-2 text-xs text-gray-500">THU</th>
                                <th className="py-2 text-xs text-gray-500">FRI</th>
                                <th className="py-2 text-xs text-gray-500">SAT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(5)].map((_, weekIndex) => (
                                <tr key={weekIndex}>
                                    {[...Array(7)].map((_, dayIndex) => {
                                        const day = weekIndex * 7 + dayIndex + 1;
                                        return (
                                            <td key={dayIndex} className="text-center py-1">
                                                {day <= 30 && (
                                                    <span className={`inline-block w-6 h-6 rounded-full ${day === 19 ? 'bg-red-500 text-white' : ''}`}>
                                                        {day}
                                                    </span>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Horario;
