import { useState } from 'react';
import { FaClipboard, FaCalendarAlt, FaUser, FaClock, FaPills, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Horario = () => {
    const doctors = [
        {
            id: 1,
            name: 'Dr. Juan Garcia',
            gender: 'Hombre',
            age: 53,
            phone: '3214567890',
            email: 'dr.juan.garcia@intervital.com',
            profilePic: '/src/Front/assets/Perfil.jpg',
            appointmentTime: '19:00',
            description: 'Especialista en medicina general con 5 años de experiencia.'
        },
        {
            id: 2,
            name: 'Dr. Julian Alberto',
            gender: 'Hombre',
            age: 43,
            phone: '3229876543',
            email: 'dr.julian.alberto@intervital.com',
            profilePic: '/src/Front/assets/Perfil2.jpg',
            appointmentTime: '16:00',
            description: 'Experto en cardiología y enfermedades cardiovasculares.'
        },
        {
            id: 3,
            name: 'Dr. Juan Hernandez',
            gender: 'Hombre',
            age: 38,
            phone: '3114567891',
            email: 'dr.juan.hernandez@intervital.com',
            profilePic: '/src/Front/assets/Perfil3.png',
            appointmentTime: '15:00',
            description: 'Médico con especialidad en endocrinología y metabolismo.'
        },
        {
            id: 4,
            name: 'Dr. Harry Styles',
            gender: 'Hombre',
            age: 35,
            phone: '3139876542',
            email: 'dr.harry.styles@intervital.com',
            profilePic: '/src/Front/assets/Perfil4.jpg',
            appointmentTime: '14:00',
            description: 'Especialista en dermatología con enfoque en enfermedades de la piel.'
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [currentMonth, setCurrentMonth] = useState(8);
    const [currentYear, setCurrentYear] = useState(2024);
    const [selectedDay, setSelectedDay] = useState(null);
    const [messages, setMessages] = useState({});
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const changeMonth = (direction) => {
        if (direction === 'prev') {
            if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
            } else {
                setCurrentMonth(currentMonth - 1);
            }
        } else if (direction === 'next') {
            if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
            } else {
                setCurrentMonth(currentMonth + 1);
            }
        }
        setSelectedDay(null);
    };

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const handleReasonSubmit = (e, id) => {
        if (e.key === 'Enter') {
            setMessages(prevMessages => ({
                ...prevMessages,
                [id]: 'Mensaje enviado'
            }));
            setTimeout(() => {
                setMessages(prevMessages => ({
                    ...prevMessages,
                    [id]: ''
                }));
            }, 3000);
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
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
                        <img src="/src/Front/assets/Doctor.jpg" alt="Doctor profile picture" className="rounded-full mr-3" style={{ width: '50px', height: '50px' }} />
                        <div>
                            <p className="font-semibold">Dr Alex Montañez</p>
                            <p className="text-sm text-gray-600">Neumólogo</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Buscar"
                            className="w-full p-2 border rounded-md"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {filteredDoctors.map(doctor => (
                        <div key={doctor.id} className="bg-white rounded-lg shadow p-4 mb-4 flex justify-between">
                            <div className="flex items-center cursor-pointer" onClick={() => setSelectedDoctor(doctor)}>
                                <img src={doctor.profilePic} alt="Doctor profile picture" className="rounded-full mr-4" style={{ width: '50px', height: '50px' }} />
                                <div>
                                    <h3 className="font-semibold">{doctor.name}</h3>
                                    <p>Género: {doctor.gender} <span className="ml-4">Edad: {doctor.age}</span></p>
                                    <p>Teléfono: <span className="bg-gray-100 p-1 rounded-md">{doctor.phone}</span></p>
                                    <p>Email: <span className="bg-gray-100 p-1 rounded-md">{doctor.email}</span></p>
                                </div>
                            </div>
                            <div className="w-1/3">
                                <p className="font-semibold">Motivo de Consulta:</p>
                                <textarea
                                    className="bg-gray-100 w-full h-16 rounded border p-2"
                                    placeholder="Escriba aquí..."
                                    onKeyDown={(e) => handleReasonSubmit(e, doctor.id)}
                                ></textarea>
                                {messages[doctor.id] && <p className="text-green-500 mt-2">{messages[doctor.id]}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-64 p-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex justify-between items-center mb-4">
                        <button className="text-gray-600" onClick={() => changeMonth('prev')}><FaChevronLeft /></button>
                        <h2 className="font-semibold">{monthNames[currentMonth]} {currentYear}</h2>
                        <button className="text-gray-600" onClick={() => changeMonth('next')}><FaChevronRight /></button>
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
                            {Array.from({ length: Math.ceil((daysInMonth(currentMonth, currentYear) + new Date(currentYear, currentMonth, 1).getDay()) / 7) }).map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Array.from({ length: 7 }).map((_, colIndex) => {
                                        const day = rowIndex * 7 + colIndex - new Date(currentYear, currentMonth, 1).getDay() + 1;
                                        return (
                                            <td key={colIndex} className={`py-2 text-center ${day > 0 && day <= daysInMonth(currentMonth, currentYear) ? 'cursor-pointer' : 'text-gray-400'}`}>
                                                {day > 0 && day <= daysInMonth(currentMonth, currentYear) ? (
                                                    <span
                                                        onClick={() => handleDayClick(day)}
                                                        className={`block p-2 rounded-full ${selectedDay === day ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                                                    >
                                                        {day}
                                                    </span>
                                                ) : null}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for Doctor Details */}
            {selectedDoctor && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
                        <button
                            onClick={() => setSelectedDoctor(null)}
                            className="absolute top-4 right-4 text-gray-600 text-2xl"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedDoctor.profilePic}
                            alt={selectedDoctor.name}
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-2">{selectedDoctor.name}</h3>
                        <p className="text-gray-700 mb-4">{selectedDoctor.description}</p>
                        <button
                            onClick={() => setSelectedDoctor(null)}
                            className="bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Horario;
