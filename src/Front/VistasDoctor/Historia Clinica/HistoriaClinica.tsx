import React from "react";

const HistoriaClinica = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleExit = () => {
    console.log("Salir");
    // Puedes redirigir o realizar alguna acción al salir si es necesario
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 border border-gray-300">
        <div className="flex flex-col items-center mb-8">
          <img
            alt="Sanavit logo"
            className="w-28 mr-4"
            src="/src/Front/assets/Logo.png"
          />
        </div>
        <h2 className="text-center text-xl font-bold mb-4">HISTORIA CLÍNICA</h2>
        <div className="border border-gray-300 p-4 mb-4">
          <h3 className="font-bold mb-2">DATOS DEL PACIENTE</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>
                <span className="font-bold">Identificación</span>: C.C 100000001
              </p>
              <p>
                <span className="font-bold">Nombre</span>: John Alexander
                Jiménez Vargas
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Sexo</span>: MASCULINO
              </p>
              <p>
                <span className="font-bold">Edad</span>: 24
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Fecha de Nacimiento</span>:
                31-02-2000
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Discapacidades</span>: No
              </p>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mb-4">
          <h3 className="font-bold mb-2">CONSULTA</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>
                <span className="font-bold">Profesional</span>: Juan Carlos
                Sainz Pico
              </p>
              <p>
                <span className="font-bold">Especialidad</span>: Fisioterapia
              </p>
              <p>
                <span className="font-bold">Motivo de consulta</span>: Dolor en
                el tobillo.
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Fecha</span>: 26-03-2024
              </p>
              <p>
                <span className="font-bold">Hora</span>: 6:15 pm
              </p>
              <p>
                <span className="font-bold">Sede</span>: Bucaramanga Cra 01#1029
              </p>
            </div>
          </div>
          <p className="mt-4">
            <span className="font-bold">Descripción</span>: El paciente acude a
            consulta por presentar dolor en el tobillo derecho, el cual ha
            persistido durante las últimas dos semanas. Refiere que el dolor
            inició de manera gradual tras un esguince leve sufrido mientras
            realizaba una actividad física (correr/jugar fútbol).
          </p>
        </div>
        <div className="border border-gray-300 p-4 mb-4">
          <h3 className="font-bold mb-2">SIGNOS VITALES</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>
                <span className="font-bold">Presión Arterial</span>: 106 / 84 mm
                Hg
              </p>
              <p>
                <span className="font-bold">Presión Arterial Media</span>: 91 /
                mm Hg
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Pulso</span>: 95 / x min
              </p>
              <p>
                <span className="font-bold">Frecuencia cardiaca</span>: 95 / x
                min
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Saturación Oxígeno</span>: 98%
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Talla (cm)</span>: 176.6cm
              </p>
              <p>
                <span className="font-bold">Peso</span>: 81Kg
              </p>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mb-4">
          <h3 className="font-bold mb-2">ANTECEDENTES</h3>
          <p>
            <span className="font-bold">Perinatales</span>: Parto de 3er
            embarazo, Nacimiento prematuro. Peso al nacer 3000gr.
          </p>
          <p>
            <span className="font-bold">Patológicos</span>: Ninguno
          </p>
          <p>
            <span className="font-bold">Medicamentos</span>: Losartán 50mg todos
            los días.
          </p>
          <p>
            <span className="font-bold">Quirúrgicos</span>: Ninguno.
          </p>
          <p>
            <span className="font-bold">Traumáticos</span>: Ninguno.
          </p>
          <p>
            <span className="font-bold">Alergias</span>: Penicilina.
          </p>
          <p>
            <span className="font-bold">Vacunas</span>: Esquema completo.
          </p>
          <p>
            <span className="font-bold">Familiares</span>: ABUELO paterno con
            problemas de corazón, necesitó MARCAPASOS.
          </p>
        </div>
        <div className="border border-gray-300 p-4 mb-4">
          <h3 className="font-bold mb-2">ÓRDENES CLÍNICAS</h3>
          <div className="mb-4">
            <p>
              <strong>Responsable de orden:</strong> Juan Carlos Sainz Pico
            </p>
            <p>
              <strong>Descripción:</strong> Radiografía
            </p>
          </div>
          <hr className="border-black mb-4" />
          <div className="mb-4">
            <p>
              <strong>Fecha de solicitud:</strong> 26/03/2024
            </p>
            <p>
              <strong>Hora de solicitud:</strong> 18:31
            </p>
          </div>
          <div className="mb-4">
            <p>
              <strong>Responsable de orden:</strong> Juan Carlos Sainz Pico
            </p>
            <p>
              <strong>Descripción:</strong> Evaluación de movilidad articular
            </p>
          </div>
          <div className="border border-black p-2 mb-4 mt-10">
            <p className="font-bold">RESUMEN Y COMENTARIOS</p>
            <p>
              Paciente con 24 años de edad, que se presenta con dolor en el
              tobillo derecho tras un esguince leve ocurrido hace dos semanas. A
              la exploración física, se observa hinchazón moderada en la región
              lateral del tobillo, con sensibilidad a la palpación sobre el
              ligamento talofibular anterior. El rango de movimiento está
              ligeramente limitado en dorsiflexión y eversión. No se observan
              signos de inestabilidad articular, pero el paciente refiere dolor
              al realizar maniobras de inversión forzada.
            </p>
          </div>
          <div className="mb-4">
            <p>
              <strong>Profesional responsable:</strong>
            </p>
            <p>Juan Carlos Sainz Pico</p>
          </div>
          <div className="mb-4">
            <p>
              <strong>(Fin)</strong>
            </p>
          </div>
        </div>
        <div className="text-gray-600 text-sm mt-4">
          <p>Historia Clínica – 26/03/2024</p>
          <p>Paciente: JOHN ALEXANDER JIMÉNEZ VARGAS</p>
          <p>C.C 100000001</p>
        </div>
        <div className="absolute top-10 left-10 flex flex-col space-y-4 print:hidden">
          <button
            onClick={handlePrint}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Imprimir
          </button>
          <button
            onClick={handleExit}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Salir
          </button>
        </div>
      </div>
      <style>
        {`
            @media print {
              .print\\:hidden {
                display: none;
              }
            }
          `}
      </style>
    </div>
  );
};

export default HistoriaClinica;
