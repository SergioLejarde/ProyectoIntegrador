import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaChevronDown } from 'react-icons/fa'; // Importa el icono de la flecha hacia abajo

const Inicio = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>ProSalud UroGénica S.A.</title>
      </Helmet>

      <div className="bg-gray-100">
        <header className="bg-teal-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://placehold.co/50x50" alt="Logo" className="mr-2" />
            <span className="text-lg font-bold">ProSalud UroGénica S.A.</span>
          </div>
          <nav className="flex items-center space-x-4 relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 focus:outline-none flex items-center"
            >
              Menú
              <FaChevronDown
                className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white text-black border border-gray-300 rounded-md shadow-lg">
                <a href="/registro-usuarios" className="block px-4 py-2 hover:bg-gray-200">Registro de usuarios</a>
                <a href="/registro-citas" className="block px-4 py-2 hover:bg-gray-200">Registro de citas</a>
                <a href="/orden-medica" className="block px-4 py-2 hover:bg-gray-200">Orden Médica</a>
              </div>
            )}
            <a
              href="/login"
              className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800"
            >
              Inicio de sesión
            </a>
          </nav>
        </header>

        <main>
          <section className="text-start py-8 px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-600 mb-4 leading-tight">
              Expertos en tu salud íntima y reproductiva
            </h1>
            <img
              src="https://placehold.co/800x400"
              alt="Medical tools and symbols on a wooden table"
              className="w-full h-auto"
            />
          </section>

          <section className="bg-teal-600 text-white p-8 flex">
            <div className="w-2/3">
              <h2 className="text-2xl font-bold mb-4">¿Quiénes somos?</h2>
              <p className="mb-4">
                En ProSalud Urogénica S.A., somos una Entidad Promotora de Salud
                especializada en la atención integral de la salud reproductiva y
                urogenital. Desde nuestra fundación, hemos estado dedicados a
                proporcionar servicios médicos de alta calidad, accesibles y
                personalizados, con el objetivo de mejorar la salud y el
                bienestar de nuestros afiliados.
              </p>
              <p className="mb-4">
                Nuestro equipo está compuesto por médicos, enfermeras, técnicos
                y profesionales de la salud altamente calificados y con vasta
                experiencia en sus respectivas áreas. Nos esforzamos por
                mantenernos a la vanguardia de los avances médicos y
                tecnológicos, asegurando que nuestros pacientes reciban el
                mejor cuidado posible basado en las últimas evidencias científicas
                y prácticas médicas.
              </p>
              <p className="mb-4">
                En ProSalud Urogénica S.A., entendemos la importancia de la salud
                reproductiva y urogenital en todas las etapas de la vida. Por
                ello, ofrecemos una amplia gama de servicios que abarcan desde
                la prevención y el diagnóstico temprano hasta el tratamiento y
                la rehabilitación. Nuestro objetivo es acompañar a nuestros
                pacientes en cada paso de su camino hacia una mejor salud,
                proporcionándoles las herramientas y el apoyo necesario para
                tomar decisiones informadas sobre su bienestar.
              </p>
              <p className="mb-4">
                Creemos firmemente en la promoción de la salud y en la educación
                de nuestros afiliados. Por ello, desarrollamos programas de
                concienciación y talleres educativos para fomentar hábitos
                saludables y prevenir enfermedades. Nuestro compromiso con la
                comunidad se refleja en nuestras iniciativas de responsabilidad
                social, que buscan mejorar la calidad de vida de las personas
                más allá de las puertas de nuestras instalaciones.
              </p>
              <p>
                En ProSalud Urogénica S.A., nos enorgullece ser más que un
                proveedor de servicios de salud; somos un aliado en el cuidado
                de nuestros afiliados. Nuestra misión es proporcionar una
                atención integral, respetuosa y compasiva, que reconozca y
                valore la dignidad de cada individuo. Trabajamos incansablemente
                para ser el referente en salud reproductiva y urogenital,
                brindando soluciones efectivas y un servicio excepcional que
                marque una diferencia positiva en la vida de las personas.
              </p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <img
                src="https://placehold.co/300x300"
                alt="Doctor holding a heart model"
                className="mb-4"
              />
              <img
                src="https://placehold.co/300x300"
                alt="Doctors discussing a patient"
              />
            </div>
          </section>

          <section className="text-center py-12">
            <h2 className="text-4xl font-bold text-teal-600 mb-6">MISIÓN</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Proin eget urna nec urna
              tincidunt congue. Sed sit amet sapien ut risus vehicula fermentum.
              Integer nec libero nec nulla tincidunt tincidunt.
            </p>
          </section>

          <section className="bg-teal-600 text-white text-center py-12">
            <h2 className="text-4xl font-bold mb-6">VISIÓN</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Proin eget urna nec urna
              tincidunt congue. Sed sit amet sapien ut risus vehicula fermentum.
              Integer nec libero nec nulla tincidunt tincidunt.
            </p>
          </section>

          <section className="text-center py-12">
            <h2 className="text-3xl font-bold text-teal-600 mb-8">VALORES</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-2 gap-20">
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2">RESPETO</h3>
                <p className="text-lg text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam scelerisque aliquam odio et faucibus.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2">EMPATÍA</h3>
                <p className="text-lg text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam scelerisque aliquam odio et faucibus.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2">INTEGRIDAD</h3>
                <p className="text-lg text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam scelerisque aliquam odio et faucibus.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2">COMPROMISO</h3>
                <p className="text-lg text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam scelerisque aliquam odio et faucibus.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-teal-600 text-white p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Contacto</h3>
              <p className="mb-2">
                Correo electrónico: contacto@profesionales.com
              </p>
              <p className="mb-2">Número de contacto: +123 456 7890</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Ubicación</h3>
              <p>Calle Ejemplo 123</p>
              <p>Ciudad, País</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Horario</h3>
              <p className="mb-2">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p>Sábados: 10:00 AM - 2:00 PM</p>
              <p>Domingos: Cerrado</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Soporte</h3>
              <p className="mb-2">
                Correo de soporte: soporte@profesionales.com
              </p>
              <p>Teléfono de soporte: +123 456 7891</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Inicio;
