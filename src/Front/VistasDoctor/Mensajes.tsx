const Mensajes = () => {
    return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          {/* Logo */}
          <div className="p-4">
            <img src="https://placehold.co/150x50/FFFFFF/00CCCC?text=INTERVITAL" alt="INTERVITAL logo" className="w-32" />
          </div>
  
          {/* Menu items */}
          <nav className="flex-1">
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
              <i className="far fa-comment-alt mr-3"></i>
              <span>General</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
              <i className="far fa-calendar-check mr-3"></i>
              <span>Citas</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
              <i className="far fa-user mr-3"></i>
              <span>Pacientes</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
              <i className="far fa-clock mr-3"></i>
              <span>Horarios</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
              <i className="fas fa-pills mr-3"></i>
              <span>Medicacion</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-cyan-500 hover:bg-gray-100">
              <i className="far fa-envelope mr-3"></i>
              <span>Mensajes</span>
            </a>
          </nav>
  
          {/* Bottom menu items */}
          <div className="mt-auto border-t border-gray-200">
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
              <i className="far fa-bell mr-3"></i>
              <span>Notificaciones</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
              <i className="fas fa-cog mr-3"></i>
              <span>Ajustes</span>
            </a>
            <div className="p-4 flex items-center">
              <img src="https://placehold.co/40x40" alt="Profile picture of Dr Alex Montañez" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <p className="text-sm font-medium">Dr Alex Montañez</p>
                <p className="text-xs text-gray-500">Neumólogo</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Search bar */}
          <div className="bg-gray-300 p-4">
            <input type="text" placeholder="Buscar" className="w-full p-2 rounded-md border border-gray-400" />
          </div>
  
          {/* Chat area */}
          <div className="flex-1 flex">
            {/* Chat list */}
            <div className="w-1/3 border-r border-gray-200 bg-white overflow-y-auto">
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h2 className="font-medium">Chat</h2>
                <button className="text-gray-600">...</button>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Anclados</h3>
                <div className="flex items-center mb-4">
                  <img src="https://placehold.co/40x40" alt="Profile picture" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-medium">Johanna Naranjo</p>
                    <p className="text-sm text-gray-500">Ha enviado un archivo</p>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Recientes</h3>
                {[...Array(14)].map((_, i) => (
                  <div key={i} className="flex items-center mb-4">
                    <img src="https://placehold.co/40x40" alt="Profile picture" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <p className="font-medium">Johanna Naranjo</p>
                      <p className="text-sm text-gray-500">Ha enviado un archivo</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Chat messages */}
            <div className="flex-1 flex flex-col bg-gray-100">
              <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img src="https://placehold.co/40x40" alt="Profile picture" className="w-10 h-10 rounded-full mr-3" />
                  <h2 className="font-medium">Johanna Naranjo</h2>
                </div>
                <div className="flex items-center">
                  <button className="text-gray-600 mx-2">Chat</button>
                  <button className="text-gray-600 mx-2">Compartido</button>
                  <button className="text-gray-600 mx-2"><i className="far fa-clock"></i></button>
                  <button className="text-gray-600 mx-2"><i className="fas fa-cog"></i></button>
                  <button className="text-gray-600 mx-2">...</button>
                </div>
              </div>
              <div className="flex-1">
                {/* Chat messages would go here */}
              </div>
              <div className="bg-white p-4">
                <input type="text" placeholder="Escriba un mensaje" className="w-full p-2 rounded-md border border-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Mensajes;
  