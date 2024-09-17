
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Para redirigir
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imagenesCarrusel = [
  { src: "/src/Front/assets/img1.png", alt: "Imagen 1" },
  { src: "/src/Front/assets/img2.jpg", alt: "Imagen 2" },
  { src: "/src/Front/assets/img3.jpg", alt: "Imagen 3" },
  { src: "/src/Front/assets/img4.jpg", alt: "Imagen 4" },
  { src: "/src/Front/assets/img5.jpg", alt: "Imagen 5" },
  { src: "/src/Front/assets/img6.jpg", alt: "Imagen 6" },
  { src: "/src/Front/assets/img7.jpg", alt: "Imagen 7" },
  { src: "/src/Front/assets/img8.jpg", alt: "Imagen 8" },
  { src: "/src/Front/assets/img9.jpg", alt: "Imagen 9"},
  { src: "/src/Front/assets/img10.jpg", alt: "Imagen 10"},
  { src: "/src/Front/assets/img11.jpg", alt: "Imagen 11"},
  { src: "/src/Front/assets/img12.jpg", alt: "Imagen 12"},
  { src: "/src/Front/assets/img13.1.jpg", alt: "Imagen 13" },
];

const servicios = [
  {
    especialidad: "Cardiología",
    descripcion: "Electrofisiología, Cardiología Nuclear, Ecocardiografía",
  },
  {
    especialidad: "Neurología",
    descripcion: "Neurología Cognitiva, Neurofisiología, Neurología del Desarrollo",
  },
  {
    especialidad: "Gastroenterología",
    descripcion: "Hepatología, Endoscopía",
  },
  {
    especialidad: "Endocrinología",
    descripcion: "Diabetes, Osteoporosis, Tiroides",
  },
  {
    especialidad: "Nefrología",
    descripcion: "Diálisis, Hipertensión",
  },
  {
    especialidad: "Hematología",
    descripcion: "Hemostasia, Transfusión Sanguínea",
  },
  {
    especialidad: "Oncología",
    descripcion: "Oncología Médica, Radioterapia",
  },
  {
    especialidad: "Reumatología",
    descripcion: "Artritis Reumatoide, Lupus, Esclerosis Múltiple",
  },
  {
    especialidad: "Infectología",
    descripcion: "Enfermedades Infecciosas Emergentes, VIH/SIDA",
  },
  {
    especialidad: "Hepatología",
    descripcion: "Enfermedades Hepáticas Virales, Cirrosis Hepática",
  },
  {
    especialidad: "Consulta Médica Especializada",
    descripcion: "Medicina general, Urogenital, Pediatría, Salud Mental, Musculo Regenerativa",
  },
  {
    especialidad: "Servicio de Extensión de Sede",
    descripcion: "Medicina general, Urogenital, Pediatría, Salud Mental, Musculo Regenerativa",
  },
  {
    especialidad: "Emergencias",
    descripcion: "Atención de Urgencias y Emergencias",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <button className="slick-next">→</button>,
  prevArrow: <button className="slick-prev">←</button>,
};

const Servicios = () => {
  const navigate = useNavigate();

  // Funciones para redirigir a las páginas correspondientes
  const handleLoginClick = () => {
    navigate("/login"); // Cambia la ruta cuando definas la página de login
  };

  const handleProgramarCitaClick = () => {
    navigate("/programar-cita-usuario"); // Cambia la ruta por la de la página de "Programa tu cita"
  };

  const handleNosotrosClick = () => {
    navigate("/quienes-somos#"); // Cambia la ruta por la de "Nosotros"
  };

  const handleServiciosClick = () => {
    navigate("/servicios.html"); // Cambia la ruta por la de "Servicios"
  };

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 relative mb-20">
        <div className="absolute left-5 top-5 bg-white p-2 rounded-full border-2 border-black">
          <img
            src="/src/Front/assets/Logo.png"
            alt="Company Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="flex justify-end pl-96 ml-96">
          <nav className="flex space-x-5">
            <a href="#" className="text-white mx-3 border-b-2 border-white pb-0" onClick={handleServiciosClick}>
              SERVICIOS
            </a>
            <a href="#" className="text-white mx-3 hover:border-b-1 hover:border-white pb-1" onClick={handleNosotrosClick}>
              NOSOTROS
            </a>
            <a href="#" className="text-white mx-3 hover:border-b-1 hover:border-white pb-1" onClick={handleLoginClick}>
              LOGIN
            </a>
          </nav>
        </div>
      </header>

      {/* Carrusel de Especialidades y Descripciones (Ahora es el primer carrusel) */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto">
          <Slider {...settings}>
            {servicios.map((servicio, index) => (
              <div key={index} className="p-4 bg-white rounded shadow-lg mb-4 relative">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={imagenesCarrusel[index % imagenesCarrusel.length].src} // Mostrar imágenes en bucle
                    alt={imagenesCarrusel[index % imagenesCarrusel.length].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Contenedor de la descripción */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-xl font-bold">{servicio.especialidad}</h3>
                  <p className="text-sm">{servicio.descripcion}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Sección de Programa tu cita */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-gray-200 p-8 rounded-lg shadow-lg">
          <div className="text-white bg-blue-500 p-8 rounded-lg w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Programa tu cita</h2>
            <p className="text-lg">
              Nuestro equipo está listo para ayudarte a coordinar tu cita con nuestros especialistas.
            </p>
            {/* Botón para programar cita */}
            <button
              onClick={handleProgramarCitaClick}
              className="bg-white text-blue-500 px-6 py-3 rounded-lg mt-4 hover:bg-gray-100"
            >
              Programa tu cita
            </button>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <img
              src="/src/Front/assets/Logo.png"
              alt="Placeholder"
              className="w-full h-auto object-cover max-h-80"
            />
          </div>
        </div>
      </section>

      {/* Carrusel de Imágenes (Ahora es el segundo carrusel) */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto">
          <Slider {...settings}>
            {imagenesCarrusel.map((imagen, index) => (
              <div key={index} className="p-4 bg-white rounded shadow-lg mb-4">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={imagen.src}
                    alt={imagen.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 mt-20">
        <div className="container mx-auto flex flex-wrap justify-between">
          {/* Información de Contacto */}
          <div className="w-full md:w-1/3 mb-6 mt-4">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-blue-500">Datos </span>
              <span className="text-white">de Contacto</span>
            </h2>
            <div className="flex items-center mb-3">
              <i className="fas fa-map-marker-alt text-2xl mr-2"></i>
              <span>
                Autopista Piedecuesta Kilómetro 7, Floridablanca, Santander
              </span>
            </div>
            <div className="flex items-center mb-3">
              <i className="fas fa-phone text-2xl mr-2"></i>
              <span>+57 3143746674</span>
            </div>
            <div className="flex items-center mb-3">
              <i className="fas fa-envelope text-2xl mr-2"></i>
              <span>contacto@empresa.com</span>
            </div>
          </div>

          {/* Horarios */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-blue-500">Horario </span>
              <span className="text-white">de Atención</span>
            </h2>
            <ul>
              <li>Lunes a Viernes: 8:00 AM - 6:00 PM</li>
              <li>Sábados: 9:00 AM - 1:00 PM</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126712.09153595776!2d-73.15460786133634!3d7.038305174894055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8e6840b36653b7df%3A0x14b8b759c78be732!2sUnab%20Campus%20el%20Bosque%20-%20Autopista%20Piedecuesta%20Km%207%20Floridablanca%2C%20Santander!3m2!1d7.1319619!2d-73.1212647!5e0!3m2!1ses!2sco!4v1693089919033!5m2!1ses!2sco"
              width="100%"
              height="250"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Servicios;
