import React from "react";
import { useNavigate } from "react-router-dom";

const QuienesSomos = () => {
  const navigate = useNavigate(); // Usado para redirigir a otras páginas

  // Funciones para manejar la navegación
  const handleServiciosClick = () => {
    navigate("/servicios"); // Redirigir a la página de Servicios
  };

  const handleLoginClick = () => {
    navigate("/login"); // Redirigir a la página de Login
  };

  return (
    <>
      <header className="bg-blue-500 text-white p-4 relative">
        <div className="absolute left-5 top-5 bg-white p-2 rounded-full border-2 border-black">
          <img
            src="../src/Front/assets/Logo.png"
            alt="Company Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="flex justify-end pl-96 ml-96">
          <nav className="flex space-x-5">
            <a
              href="#"
              className="text-white mx-3 hover:border-b-1 hover:border-white pb-1"
              onClick={handleServiciosClick}
            >
              SERVICIOS
            </a>
            <a
              href="#"
              className="text-white mx-3 border-b-2 border-white pb-0"
            >
              NOSOTROS
            </a>
            <a
              href="#"
              className="text-white mx-3 hover:border-b-1 hover:border-white pb-1"
              onClick={handleLoginClick}
            >
              LOGIN
            </a>
          </nav>
        </div>
      </header>

      {/* Background Image Section */}
      <section className="relative mt-12">
        <img
          src="../src/Front/assets/Encabezado.png"
          alt="Quienes Somos Background"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Company Information Section */}
      <section className="text-center m-20 mt-40 mb-40">
        <h2 className="text-4xl font-bold text-blue-600 tracking-wider">
          Comprometidos con tu bienestar
        </h2>
        <p className="text-gray-600 text-lg mt-4">
          Somos una empresa de servicios especializada en Seguridad y Salud en
          el Trabajo, con amplio conocimiento y experiencia en la implementación
          de programas orientados a la prevención de riesgos. Nos enfocamos en
          transformar los requerimientos legales en beneficios concretos que
          agregan valor a las empresas, contribuyendo de manera significativa a
          su sostenibilidad.
        </p>
      </section>

      {/* Corporate Values and Quality Policies Section */}
      <section className="flex flex-col lg:flex-row justify-around bg-blue-500 text-white py-10 mt-8">
        {/* Corporate Values */}
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Valores Corporativos</h2>
          <div className="flex items-center mb-4">
            <i className="fas fa-handshake text-2xl mr-3"></i>
            <div>
              <h3 className="text-xl font-semibold">Sentido de Pertenencia</h3>
              <p>
                Valoramos profundamente el compromiso de cada miembro con la
                empresa y sus objetivos, fomentando una cultura de colaboración
                y lealtad.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <i className="fas fa-tachometer-alt text-2xl mr-3"></i>
            <div>
              <h3 className="text-xl font-semibold">Responsabilidad</h3>
              <p>
                Fomentamos un entorno donde cada individuo asume la
                responsabilidad de sus tareas y contribuye al éxito colectivo
                mediante la integridad y el profesionalismo.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <i className="fas fa-briefcase text-2xl mr-3"></i>
            <div>
              <h3 className="text-xl font-semibold">Honestidad</h3>
              <p>
                Promovemos la transparencia y la ética en todas nuestras
                operaciones, asegurando que todas nuestras acciones reflejen
                nuestros valores fundamentales.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fas fa-globe text-2xl mr-3"></i>
            <div>
              <h3 className="text-xl font-semibold">Responsabilidad Social</h3>
              <p>
                Nos comprometemos a mantener relaciones éticas con la comunidad
                y a contribuir al bienestar social, apoyando iniciativas que
                tengan un impacto positivo en nuestro entorno.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Policies */}
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Políticas de Calidad</h2>
          <div className="flex items-center mb-4">
            <i className="fas fa-users text-2xl mr-3"></i>
            <div>
              <h3 className="text-xl font-semibold">Talento Humano</h3>
              <p>
                Nos dedicamos a la selección y desarrollo de un talento humano
                altamente capacitado, creando un ambiente laboral positivo y
                colaborativo que promueve la excelencia.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <i className="fas fa-dollar-sign text-2xl mr-3"></i>
            <div>
              <h3 className="text-xl font-semibold">Rentabilidad</h3>
              <p>
                Buscamos maximizar la rentabilidad de nuestros servicios,
                asegurando una gestión eficiente y sostenible que beneficie a
                nuestros socios y clientes.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fas fa-tools text-2xl mr-3"></i>
            <div>
              <h3 className="text-xl font-semibold">Mejora Continua</h3>
              <p>
                Estamos comprometidos con la mejora continua de nuestros
                procesos y servicios, invirtiendo en innovación y adaptándonos a
                las necesidades cambiantes de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose, Plan, and Quality Policy Section */}
      <section
        className="flex justify-around py-12 bg-cover bg-center mt-20 mb-20"
        style={{ backgroundImage: `url('../src/Front/assets/FondoLP.png')` }}
      >
        <div className="bg-white p-6 w-1/3 text-center relative min-h-[250px]">
          <i className="fas fa-check-circle text-blue-500 text-4xl absolute top-[-20px] left-1/2 transform -translate-x-1/2 mt-8"></i>
          <h3 className="text-xl font-bold mt-10">Nuestro Propósito</h3>
          <p className="mt-3">
            Ofrecemos soluciones integrales en Seguridad y Salud en el Trabajo,
            diseñadas para construir un entorno laboral seguro y eficiente,
            generando confianza y valor para nuestros clientes.
          </p>
        </div>
        <div className="bg-blue-900 text-white p-6 w-1/3 text-center relative min-h-[250px]">
          <i className="fas fa-check-circle text-white text-4xl absolute top-[-20px] left-1/2 transform -translate-x-1/2 mt-8"></i>
          <h3 className="text-xl font-bold mt-10">Nuestro Plan</h3>
          <p className="mt-3">
            Nuestro objetivo es consolidarnos como un referente en el sector de
            Seguridad y Salud, ofreciendo servicios innovadores y humanizados
            que respondan a las demandas actuales del mercado.
          </p>
        </div>
        <div className="bg-white p-6 w-1/3 text-center relative min-h-[250px]">
          <i className="fas fa-check-circle text-blue-500 text-4xl absolute top-[-20px] left-1/2 transform -translate-x-1/2 mt-8"></i>
          <h3 className="text-xl font-bold mt-10">Política de Calidad</h3>
          <p className="mt-3">
            Estamos dedicados a cumplir con los estándares más altos de calidad
            y normativa, garantizando un servicio que protege la vida y cumple
            con todas las exigencias legales y de calidad.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-6 mt-4">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-blue-500">Datos </span>de contacto
            </h2>
            <ul>
              <li className="mb-2">Teléfono: +57 123 456 7890</li>
              <li className="mb-2">Correo: contacto@empresa.com</li>
              <li className="mb-2">Dirección: Calle 123 #45-67, Ciudad, País</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default QuienesSomos;
