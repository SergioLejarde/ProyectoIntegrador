import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  pinned: boolean;
}

interface Message {
  id: number;
  text: string;
  sender: 'doctor' | 'patient';
  timestamp: Date;
}

const generateRandomName = (): string => {
  const firstNames = ['María', 'Juan', 'Ana', 'Carlos', 'Sofía', 'Luis', 'Laura', 'Pedro', 'Elena', 'Diego'];
  const lastNames = ['García', 'Rodríguez', 'López', 'Martínez', 'González', 'Pérez', 'Sánchez', 'Romero', 'Fernández', 'Torres'];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
};

const Mensajes: React.FC = () => {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [messages, setMessages] = useState<Record<number, Message[]>>({});
  const [currentMessage, setCurrentMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarContent, setSidebarContent] = useState<string | null>(null);

  const menuItems = [
    { icon: 'far fa-comment-alt', text: 'General', action: () => setSidebarContent('Sección General: Resumen de actividades y notificaciones') },
    { icon: 'far fa-calendar-check', text: 'Citas', action: () => setSidebarContent('Calendario de Citas: Próximas consultas programadas') },
    { icon: 'far fa-user', text: 'Pacientes', action: () => setSidebarContent('Lista de Pacientes: Información y historiales médicos') },
    { icon: 'far fa-clock', text: 'Horarios', action: () => setSidebarContent('Horarios de Consulta: Disponibilidad y agenda semanal') },
    { icon: 'fas fa-pills', text: 'Medicacion', action: () => setSidebarContent('Gestión de Medicamentos: Recetas y seguimiento de tratamientos') },
    { icon: 'far fa-envelope', text: 'Mensajes', active: true, action: () => setSidebarContent(null) },
  ];

  const [chats, setChats] = useState<Chat[]>([
    { id: 1, name: 'Johanna Naranjo', lastMessage: 'Ha enviado un archivo', pinned: true },
    ...Array.from({ length: 14 }, (_, i) => ({
      id: i + 2,
      name: generateRandomName(),
      lastMessage: 'Último mensaje',
      pinned: false
    }))
  ]);

  useEffect(() => {
    // Generar mensajes de ejemplo para cada chat
    const exampleMessages: Record<number, Message[]> = {};
    chats.forEach(chat => {
      exampleMessages[chat.id] = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        text: `Mensaje de ejemplo ${i + 1}`,
        sender: i % 2 === 0 ? 'doctor' : 'patient',
        timestamp: new Date(Date.now() - (5 - i) * 60000)
      }));
    });
    setMessages(exampleMessages);
  }, [chats]);

  const handleSendMessage = () => {
    if (currentMessage.trim() && activeChat !== null) {
      const newMessage: Message = {
        id: messages[activeChat].length,
        text: currentMessage,
        sender: 'doctor',
        timestamp: new Date()
      };
      setMessages(prev => ({
        ...prev,
        [activeChat]: [...prev[activeChat], newMessage]
      }));
      setCurrentMessage('');
    }
  };

  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4">
          <img src="/src/Front/assets/img1.png" alt="INTERVITAL logo" className="w-32" />
        </div>

        {/* Menu items */}
        <nav className="flex-1">
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href="#" 
              className={`flex items-center px-4 py-2 ${item.active ? 'text-cyan-500' : 'text-gray-600'} hover:bg-gray-100`}
              onClick={item.action}
            >
              <i className={`${item.icon} mr-3`}></i>
              <span>{item.text}</span>
            </a>
          ))}
        </nav>

        {/* Bottom menu items */}
        <div className="mt-auto border-t border-gray-200">
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setSidebarContent('Centro de Notificaciones: Alertas y mensajes importantes')}>
            <i className="far fa-bell mr-3"></i>
            <span>Notificaciones</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setSidebarContent('Configuración de la cuenta y preferencias del sistema')}>
            <i className="fas fa-cog mr-3"></i>
            <span>Ajustes</span>
          </a>
          <div className="p-4 flex items-center">
            <img src="/src/Front/assets/img1.png" alt="Profile picture of Dr Alex Montañez" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="text-sm font-medium">Dr Alex Montañez</p>
              <p className="text-xs text-gray-500">Neumólogo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {sidebarContent ? (
          <div className="flex-1 p-4 bg-white">
            <h2 className="text-xl font-bold mb-4">Información</h2>
            <p>{sidebarContent}</p>
          </div>
        ) : (
          <>
            {/* Search bar */}
            <div className="bg-gray-300 p-4">
              <input
                type="text"
                placeholder="Buscar"
                value={searchTerm}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                className="w-full p-2 rounded-md border border-gray-400"
              />
            </div>

            {/* Chat area */}
            <div className="flex-1 flex flex-col md:flex-row">
              {/* Chat list */}
              <div className="w-full md:w-1/3 border-r border-gray-200 bg-white overflow-y-auto">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h2 className="font-medium">Chat</h2>
                  <button className="text-gray-600">...</button>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Anclados</h3>
                  {filteredChats.filter(chat => chat.pinned).map((chat) => (
                    <div key={chat.id} className="flex items-center mb-4 cursor-pointer" onClick={() => setActiveChat(chat.id)}>
                      <img src="/src/Front/assets/img1.png" alt={`Profile picture of ${chat.name}`} className="w-10 h-10 rounded-full mr-3" />
                      <div>
                        <p className="font-medium">{chat.name}</p>
                        <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                      </div>
                    </div>
                  ))}
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Recientes</h3>
                  {filteredChats.filter(chat => !chat.pinned).map((chat) => (
                    <div key={chat.id} className="flex items-center mb-4 cursor-pointer" onClick={() => setActiveChat(chat.id)}>
                      <img src="/src/Front/assets/img1.png" alt={`Profile picture of ${chat.name}`} className="w-10 h-10 rounded-full mr-3" />
                      <div>
                        <p className="font-medium">{chat.name}</p>
                        <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat messages */}
              <div className="flex-1 flex flex-col bg-gray-100">
                {activeChat !== null ? (
                  <>
                    <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <img src="/src/Front/assets/img1.png" alt={`Profile picture of ${chats.find(c => c.id === activeChat)?.name}`} className="w-10 h-10 rounded-full mr-3" />
                        <h2 className="font-medium">{chats.find(c => c.id === activeChat)?.name}</h2>
                      </div>
                      <div className="flex items-center">
                        <button className="mx-2 text-gray-600">Chat</button>
                        <button className="mx-2 text-gray-600">Compartido</button>
                        <button className="mx-2 text-gray-600"><i className="far fa-clock"></i></button>
                        <button className="mx-2 text-gray-600"><i className="fas fa-cog"></i></button>
                        <button className="mx-2 text-gray-600">...</button>
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4">
                      {messages[activeChat]?.map((msg) => (
                        <div key={msg.id} className={`mb-4 ${msg.sender === 'doctor' ? 'text-right' : 'text-left'}`}>
                          <div className={`inline-block p-2 rounded-lg ${msg.sender === 'doctor' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                            {msg.text}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {msg.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white p-4">
                      <div className="flex">
                        <input
                          type="text"
                          placeholder="Escriba un mensaje"
                          value={currentMessage}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => setCurrentMessage(e.target.value)}
                          onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSendMessage()}
                          className="flex-1 p-2 rounded-l-md border border-gray-300"
                        />
                        <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Enviar</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-gray-500">Seleccione un chat para comenzar</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Mensajes;