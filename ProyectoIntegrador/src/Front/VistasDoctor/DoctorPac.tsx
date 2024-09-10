import React from "react";
import { Helmet } from "react-helmet-async";

const DoctorPac = () => {
    return (
        <>
            <Helmet>
                <title>Doctor</title>
            </Helmet>
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <div className="w-64 bg-white shadow-md relative">
                    <div className="p-4">
                        <img src="https://placehold.co/150x50/5BCEFA/FFF?text=INTERVITAL" alt="INTERVITAL logo" className="mb-8" />
                        <nav>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="flex items-center text-gray-600 hover:text-blue-500">
                                        <i className="far fa-file-alt mr-3"></i>General
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-600 hover:text-blue-500">
                                        <i className="far fa-calendar-check mr-3"></i>Citas
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-blue-500">
                                        <i className="fas fa-user-injured mr-3"></i>Pacientes
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-600 hover:text-blue-500">
                                        <i className="far fa-clock mr-3"></i>Horarios
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-600 hover:text-blue-500">
                                        <i className="fas fa-pills mr-3"></i>Medicacion
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-600 hover:text-blue-500">
                                        <i className="far fa-envelope mr-3"></i>Mensajes
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="absolute bottom-0 left-0 w-64 p-4 border-t">
                        <div className="flex items-center">
                            <img src="https://placehold.co/40x40" alt="Doctor profile picture" className="w-10 h-10 rounded-full mr-3" />
                            <div>
                                <p className="font-medium">Dr Alex Montañez</p>
                                <p className="text-sm text-gray-500">Neumólogo</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-auto">
                    <div className="p-8">
                        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">Buscar</h2>
                                <input type="text" placeholder="Buscar" className="border rounded-full px-4 py-2 w-2/3" />
                            </div>
                            <div className="flex">
                                <div className="w-1/3 pr-4 relative">
                                    <img src="https://placehold.co/150x150" alt="Patient profile picture" className="w-full rounded-lg mb-2" />
                                    <button className="absolute top-2 right-2 text-gray-500">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                <div className="w-2/3">
                                    <h3 className="text-xl font-semibold">Juan Nicolas Rey Vazques</h3>
                                    <p className="text-gray-600">Hombre <span className="mx-2">|</span> Edad: 20</p>
                                    <p className="text-gray-600">321456789</p>
                                    <p className="text-gray-600">juantodoalrojo@rio.com</p>
                                    <p className="text-gray-600 mt-2">Última visita: 19/08/2024</p>
                                    <div className="mt-4">
                                        <h4 className="font-semibold">Alergias Conocidas</h4>
                                        <div className="flex space-x-2 mt-1">
                                            <span className="bg-gray-200 px-2 py-1 rounded">Estudio</span>
                                            <span className="bg-gray-200 px-2 py-1 rounded">Calculo</span>
                                            <span className="bg-gray-200 px-2 py-1 rounded">A parchar</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                            <h2 className="text-xl font-semibold mb-4">Signos recientes</h2>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <p className="text-2xl font-bold">126 mg/dl</p>
                                    <p className="text-sm text-gray-500">Nivel de glucosa</p>
                                    <p className="text-xs text-gray-400">Despues cenar</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">39.2°C</p>
                                    <p className="text-sm text-gray-500">Nivel de temperatura</p>
                                    <p className="text-xs text-gray-400">Hoy</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">130/80 mm hg</p>
                                    <p className="text-sm text-gray-500">Presion de sangre</p>
                                    <p className="text-xs text-gray-400">Hoy</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">125 mg/dl</p>
                                    <p className="text-sm text-gray-500">Nivel de glucosa</p>
                                    <p className="text-xs text-gray-400">Antes cenar</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">1.55 Cm</p>
                                    <p className="text-sm text-gray-500">Estatura</p>
                                    <p className="text-xs text-gray-400">Hoy</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">90 Kg</p>
                                    <p className="text-sm text-gray-500">Peso</p>
                                    <p className="text-xs text-gray-400">Hoy</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">Historial</h2>
                                <button className="text-gray-500">
                                    <i className="fas fa-expand-alt"></i>
                                </button>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                            <h2 className="text-xl font-semibold mb-4">Razon Consulta</h2>
                            <input type="text" placeholder="Buscar" className="border rounded-full px-4 py-2 w-full mb-4" />
                            <div className="space-y-2">
                                <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
                                    <span>1. Dolor Pulmon Derecho</span>
                                    <div>
                                        <span className="text-gray-500 mr-4">Tipo diagnosis</span>
                                        <button className="text-gray-500">
                                            <i className="fas fa-chevron-down"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
                                    <span>2. Fiebre</span>
                                    <div>
                                        <span className="text-gray-500 mr-4">Tipo diagnosis</span>
                                        <button className="text-gray-500">
                                            <i className="fas fa-chevron-down"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4">Medicacion</h2>
                            <textarea placeholder="Detalles (1000 max)" className="border rounded w-full p-2 h-24"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorPac;
