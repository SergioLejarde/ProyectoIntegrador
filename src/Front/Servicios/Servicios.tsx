import React from "react";
import Carousel from "../components/Carrusel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Asegúrate de que la ruta sea correcta

const servicios = [
  {
    especialidad: "Cardiología",
    descripcion: "Electrofisiología, Cardiología Nuclear, Ecocardiografía",
  },
  {
    especialidad: "Neurología",
    descripcion:
      "Neurología Cognitiva, Neurofisiología, Neurología del Desarrollo",
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
    descripcion:
      "Medicina general, Urogenital, Pediatría, Salud Mental, Musculo Regenerativa",
  },
  {
    especialidad: "Servicio de Extensión de Sede",
    descripcion:
      "Medicina general, Urogenital, Pediatría, Salud Mental, Musculo Regenerativa",
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
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <button className="slick-next">→</button>,
  prevArrow: <button className="slick-prev">←</button>,
};


const Servicios = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 relative mb-20">
        <div className="absolute left-5 top-5 bg-white p-2 rounded-full border-2 border-black">
          <img
            src="/src/Front/assets/Logo.png" // Ajusta la ruta según la ubicación de tu logo
            alt="Company Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="flex justify-end pl-96 ml-96">
          <nav className="flex space-x-5">
            <a
              href="#"
              className="text-white mx-3 border-b-2 border-white pb-0"
            >
              SERVICIOS
            </a>
            <a
              href="#"
              className="text-white mx-3 hover:border-b-1 hover:border-white pb-1"
            >
              NOSOTROS
            </a>
            <a
              href="#"
              className="text-white mx-3 hover:border-b-1 hover:border-white pb-1"
            >
              LOGIN
            </a>
          </nav>
        </div>
      </header>

      {/* Carrusel de Servicios */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto">
          <Carousel />
        </div>
      </section>


      {/* Sección de Programa tu cita */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-gray-200 p-8 rounded-lg shadow-lg">
          <div className="text-white bg-blue-500 p-8 rounded-lg w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Programa tu cita</h2>
            <p className="text-lg">
              Nuestro equipo está listo para ayudarte a coordinar tu cita con
              nuestros especialistas.
            </p>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <img src="https://via.placeholder.com/600x400" alt="Placeholder" />
          </div>
        </div>
      </section>

       {/* Carrusel de Servicios */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto">
          <Slider {...settings}>
            {servicios.map((servicio, index) => (
              <div key={index} className="p-4 bg-white rounded shadow-lg mb-4">
                <h3 className="text-xl font-bold mb-2">{servicio.especialidad}</h3>
                <p>{servicio.descripcion}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm mt-2">
                  Agendar cita
                </button>
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

          {/* Horario de Atención y Mapa */}
          <div className="w-full md:w-2/3 mb- flex flex-wrap mt-0.5">
            {/* Horario de Atención */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0 p-4">
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
            {/* Mapa */}
            <div className="w-full md:w-1/2 p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126712.09153595776!2d-73.15460786133634!3d7.038305174894055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8e6840b36653b9c5%3A0x4dcdbc55842151df!2sAutopista%20Piedecuesta%20Kil%C3%B3metro%207%2C%2C%20Floridablanca%2C%20Santander!3m2!1d7.038142!2d-73.072204!5e0!3m2!1ses-419!2sco!4v1725904032560!5m2!1ses-419!2sco"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa UPB Bucaramanga"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Servicios;
