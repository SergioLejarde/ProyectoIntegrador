import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const Doctor = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-4">
                    <img src="https://placehold.co/150x50/5BCEFA/FFF?text=INTERVITAL" alt="INTERVITAL logo" className="mb-8" />
                    <nav>
                        <ul className="space-y-2">
                            <li><a href="#" className="flex items-center text-blue-500"><i className="far fa-clipboard mr-3"></i> General</a></li>
                            <li><a href="#" className="flex items-center text-gray-600"><i className="far fa-calendar-alt mr-3"></i> Citas</a></li>
                            <li><a href="#" className="flex items-center text-gray-600"><i className="far fa-user mr-3"></i> Pacientes</a></li>
                            <li><a href="#" className="flex items-center text-gray-600"><i className="far fa-clock mr-3"></i> Horarios</a></li>
                            <li><a href="#" className="flex items-center text-gray-600"><i className="fas fa-pills mr-3"></i> Medicacion</a></li>
                            <li><a href="#" className="flex items-center text-gray-600"><i className="far fa-envelope mr-3"></i> Mensajes</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="absolute bottom-0 left-0 w-64 p-4 border-t">
                    <div className="flex items-center">
                        <img src="https://placehold.co/40x40" alt="Profile picture of a doctor" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <p className="font-medium">Dr Alex Montañez</p>
                            <p className="text-sm text-gray-600">Neumologo</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-hidden">
                {/* Search Bar */}
                <div className="p-4 bg-white shadow-sm">
                    <input type="text" placeholder="Buscar" className="w-full p-2 border rounded-md" />
                </div>

                {/* Dashboard Content */}
                <div className="flex p-4 space-x-4">
                    {/* Left Column */}
                    <div className="flex-1 space-y-4">
                        <div className="bg-white p-4 rounded-md shadow">
                            <h2 className="text-lg font-medium mb-4">Hoy</h2>
                            <div className="flex space-x-4">
                                <div className="flex-1 bg-gray-100 p-4 rounded-md relative">
                                    <h3 className="text-lg font-medium">Citas</h3>
                                    <p className="text-4xl font-bold">12</p>
                                    <i className="fas fa-camera-retro text-3xl text-gray-400 absolute bottom-4 right-4"></i>
                                    <button className="absolute top-2 right-2 text-blue-500"><i className="fas fa-ellipsis-v"></i></button>
                                </div>
                                <div className="flex-1 bg-gray-100 p-4 rounded-md relative">
                                    <h3 className="text-lg font-medium">Horas</h3>
                                    <p className="text-4xl font-bold">2h</p>
                                    <i className="far fa-clock text-3xl text-gray-400 absolute bottom-4 right-4"></i>
                                    <button className="absolute top-2 right-2 text-blue-500"><i className="fas fa-ellipsis-v"></i></button>
                                </div>
                                <div className="flex-1 bg-gray-100 p-4 rounded-md relative">
                                    <h3 className="text-lg font-medium">Cirugias</h3>
                                    <p className="text-4xl font-bold">1</p>
                                    <i className="fas fa-syringe text-3xl text-gray-400 absolute bottom-4 right-4"></i>
                                    <button className="absolute top-2 right-2 text-blue-500"><i className="fas fa-ellipsis-v"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-md shadow">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-medium">Citas</h2>
                                <a href="#" className="text-blue-500 text-sm">Ver Todas</a>
                            </div>
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-gray-600">
                                        <th className="pb-2">Registro No.</th>
                                        <th className="pb-2">Nombre Paciente</th>
                                        <th className="pb-2">Genero</th>
                                        <th className="pb-2">Razon</th>
                                        <th className="pb-2">Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(12)].map((_, i) => (
                                        <tr key={i} className="border-t">
                                            <td className="py-2">#50187</td>
                                            <td className="py-2">Juan Perez</td>
                                            <td className="py-2">Masculino</td>
                                            <td className="py-2">Consulta General</td>
                                            <td className="py-2"><button className="text-blue-500">Ver</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-80 bg-white p-4 rounded-md shadow">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium">Cronograma del Dia</h2>
                            <a href="#" className="text-blue-500 text-sm">Ver Todo</a>
                        </div>
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
                            <ul className="space-y-6 relative">
                                <li className="ml-8">
                                    <span className="absolute left-[-1.75rem] w-4 h-4 bg-gray-200 rounded-full"></span>
                                    <p className="text-sm text-gray-600">10:00</p>
                                    <p className="font-medium">Cita Nicolas Rey</p>
                                </li>
                                <li className="ml-8">
                                    <span className="absolute left-[-1.75rem] w-4 h-4 bg-gray-200 rounded-full"></span>
                                    <p className="text-sm text-gray-600">10:30</p>
                                    <p className="font-medium">Revision Pac: #50907</p>
                                </li>
                                <li className="ml-8">
                                    <span className="absolute left-[-1.75rem] w-4 h-4 bg-gray-200 rounded-full"></span>
                                    <p className="text-sm text-gray-600">10:50</p>
                                    <p className="font-medium">Cita Josue Daniel Gomez</p>
                                </li>
                                <li className="ml-8">
                                    <span className="absolute left-[-1.75rem] w-4 h-4 bg-gray-200 rounded-full"></span>
                                    <p className="text-sm text-gray-600">11:30</p>
                                    <p className="font-medium">Cita Santiago Florez</p>
                                </li>
                                <li className="ml-8 bg-gray-100 p-3 rounded-md">
                                    <span className="absolute left-[-1.75rem] w-4 h-4 bg-blue-500 rounded-full"></span>
                                    <p className="text-sm text-gray-600">11:50</p>
                                    <p className="font-medium">Cita Oscar Rios</p>
                                    <div className="mt-2">
                                        <p className="text-sm"><span className="font-medium">Paciente:</span> Oscar Rios</p>
                                        <p className="text-sm"><span className="font-medium">Hora:</span> 11:50-12:00</p>
                                        <p className="text-sm"><span className="font-medium">Proposito:</span> Control Neumonia</p>
                                    </div>
                                    <div className="mt-2 flex justify-between items-center">
                                        <button className="text-red-500"><i className="fas fa-trash"></i></button>
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">Empezar</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;