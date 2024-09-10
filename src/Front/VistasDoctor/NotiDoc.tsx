const NotiDoc = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md flex flex-col">
                <div className="flex-grow">
                    <div className="p-4">
                        <img src="https://placehold.co/150x50/5BCBF5/FFF?text=INTERVITAL" alt="Intervital logo" className="mb-8" />
                        <nav>
                            <ul className="space-y-4">
                                <li><a href="#" className="flex items-center text-gray-600"><i className="far fa-comment-alt mr-3"></i> General</a></li>
                                <li><a href="#" className="flex items-center text-gray-600"><i className="far fa-calendar-alt mr-3"></i> Citas</a></li>
                                <li><a href="#" className="flex items-center text-gray-600"><i className="far fa-user mr-3"></i> Pacientes</a></li>
                                <li><a href="#" className="flex items-center text-gray-600"><i className="far fa-clock mr-3"></i> Horarios</a></li>
                                <li><a href="#" className="flex items-center text-gray-600"><i className="fas fa-pills mr-3"></i> Medicacion</a></li>
                                <li><a href="#" className="flex items-center text-gray-600"><i className="far fa-envelope mr-3"></i> Mensajes</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="p-4">
                    <ul className="space-y-4">
                        <li><a href="#" className="flex items-center text-gray-600"><i className="far fa-bell mr-3"></i> Notificaciones</a></li>
                        <li><a href="#" className="flex items-center text-gray-600"><i className="fas fa-cog mr-3"></i> Ajustes</a></li>
                    </ul>
                </div>
                <div className="p-4 border-t">
                    <div className="flex items-center">
                        <img src="https://placehold.co/40x40" alt="Profile picture of Dr Alex Montañez" className="rounded-full mr-3" />
                        <div>
                            <p className="font-medium">Dr Alex Montañez</p>
                            <p className="text-sm text-gray-500">Neumologo</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-10">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-6">
                        <input type="text" placeholder="Buscar" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        Centro de notificaciones <i className="far fa-bell ml-2"></i>
                    </h2>
                    <div className="space-y-4">
                        <h3 className="font-medium text-gray-500">Hoy</h3>
                        <div className="bg-white rounded-md p-3 shadow flex justify-between items-center">
                            <span>Mensaje de Johhana Jaimes</span>
                            <span className="text-gray-500">11:07</span>
                        </div>
                        <div className="bg-white rounded-md p-3 shadow flex justify-between items-center">
                            <span>Llamada grupal Perdida</span>
                            <span className="text-gray-500">9:00</span>
                        </div>
                        <div className="bg-white rounded-md p-3 shadow flex justify-between items-center">
                            <span>Recordatorio cita Nicolas Rey</span>
                            <span className="text-gray-500">6:00</span>
                        </div>
                        <div className="bg-white rounded-md p-3 shadow flex justify-between items-center">
                            <span>Llamada grupal Perdida</span>
                            <span className="text-gray-500">5:00</span>
                        </div>
                        <h3 className="font-medium text-gray-500 mt-6">Ayer</h3>
                        <div className="bg-white rounded-md p-3 shadow flex justify-between items-center">
                            <span>Mensaje de Johhana Jaimes</span>
                            <span className="text-gray-500">18:00</span>
                        </div>
                        <div className="bg-white rounded-md p-3 shadow flex justify-between items-center">
                            <span>Recordatorio cita Santiago Niño</span>
                            <span className="text-gray-500">15:00</span>
                        </div>
                        <div className="bg-white rounded-md p-3 shadow flex justify-between items-center">
                            <span>Mensaje de Dr Felipe Hernandez</span>
                            <span className="text-gray-500">15:00</span>
                        </div>
                        <div className="bg-white rounded-md p-3 shadow flex justify-between items-center">
                            <span>Mensaje de Dr Andres Esteban</span>
                            <span className="text-gray-500">15:00</span>
                        </div>
                        <div className="bg-white rounded-md p-3 shadow flex justify-between items-center">
                            <span>Mensaje de Dr Juan Carlos</span>
                            <span className="text-gray-500">15:00</span>
                        </div>
                        <h3 className="font-medium text-gray-500 mt-6">Domingo 17/08</h3>
                        <div className="bg-white rounded-md p-3 shadow flex justify-between items-center">
                            <span>Llamada grupal Perdida</span>
                            <span className="text-gray-500">15:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NotiDoc;
