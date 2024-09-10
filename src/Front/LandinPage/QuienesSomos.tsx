import React from "react";

const QuienesSomos = () => {
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
          {" "}
          {/* Añadido padding top para ajustar el espacio */}
          <nav className="flex space-x-5">
            <a
              href="#"
              className="text-white mx-3 hover:border-b-1 hover:border-white pb-1 "
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
              className="text-white mx-3 hover:border-b-1 hover:border-white pb-1 "
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

          {/* Business Hours and Map */}
          <div className="w-full md:w-2/3 mb- flex flex-wrap mt-0.5">
            {/* Business Hours */}
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
            {/* Map */}
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
    </>
  );
};

export default QuienesSomos;
